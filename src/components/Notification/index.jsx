import React, { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';
import { useAuth } from '../../hooks/authHook';

import Tooltip from '../Tooltip';

import { Container } from './styles';

function Notification({ notification_id, description, task_id, read }) {
  const { token } = useAuth();
  const [title, setTitle] = useState('');
  const [readState, setReadeState] = useState(read);

  api.defaults.headers.common.authorization = `Barer ${token}`;

  useEffect(async () => {
    const response = await api.get(`tasks/showTask/${task_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const title =
      response.data.description +
      ' ' +
      new Date(response.data.deadline).toLocaleString();

    setTitle(title);
  }, []);

  const handleUpdateStatusNotification = useCallback(async readState => {
    await api.patch(`notifications/updateStatus/${notification_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setReadeState(readState);
  }, []);

  return (
    <Tooltip title={title} status="expires">
      <Container onClick={() => handleUpdateStatusNotification(!readState)}>
        {!readState && <p>Nova!</p>}
        <p>{description}</p>
      </Container>
    </Tooltip>
  );
}

export default Notification;
