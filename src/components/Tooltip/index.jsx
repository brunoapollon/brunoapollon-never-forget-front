import React from 'react';

import { Container } from './styles';

const Tooltip = function ({ children, title, status }) {
  return (
    <Container status={status}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
