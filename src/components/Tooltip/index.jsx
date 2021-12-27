import React from 'react';

import { Container } from './styles';

const Tooltip = function ({ children, title }) {
  return (
    <Container>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
