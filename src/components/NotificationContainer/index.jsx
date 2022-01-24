import React, { forwardRef } from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';

const NotificationContainer = forwardRef((props, ref) => {
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
    delay: 400,
    expires: props.expires,
  });
  if (props.visible) return null;
  return transitions((style, item) => (
    <Container {...props} style={style} ref={ref}>
      <h2>Suas notificações</h2>
    </Container>
  ));
});

export default NotificationContainer;
