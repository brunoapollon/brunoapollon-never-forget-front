import React, { forwardRef, useState, useEffect } from 'react';
import { useTransition } from 'react-spring';

import api from '../../services/api';
import { useAuth } from '../../hooks/authHook';

import Notification from '../Notification';

import { Container } from './styles';

const NotificationContainer = forwardRef(({ visible, ...rest }, ref) => {
  const { token } = useAuth();
  const [notifications, setNotifications] = useState([]);
  useEffect(async () => {
    const response = await api.get('notifications/allNotifications', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setNotifications(response.data);
    console.log(notifications);
  }, []);
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      position: 'absolute',
      transform: 'translateX(400px)',
    },
    enter: {
      opacity: 1,
      position: 'absolute',
      transform: 'translateX(0px)',
    },
    leave: {
      opacity: 0,
      position: 'absolute',
      transform: 'translateX(400px)',
    },
    delay: 200,
    reset: true,
  });
  return transitions(
    (style, item) =>
      visible && (
        <Container {...rest} style={style} ref={ref}>
          <h2>Suas notificações</h2>
          {notifications.length !== 0 &&
            notifications.map(notificationElement => (
              <Notification
                key={notificationElement.id}
                notification_id={notificationElement.id}
                description={notificationElement.description}
                read={notificationElement.read}
                task_id={notificationElement.task_id}
              />
            ))}
        </Container>
      ),
  );
});

export default NotificationContainer;
