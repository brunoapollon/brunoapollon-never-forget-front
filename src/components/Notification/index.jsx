import React from 'react';

import { Container } from './styles';

function Notification({ description, task_id, read }) {
  return (
    <Container>
      {!read && <span>Nova!</span>}
      <p>{description}</p>
    </Container>
  );
}

export default Notification;
