import React from 'react';

import { Container, Input } from './styles';

const InputComponent = function (props) {
  return (
    <Container>
      <Input {...props} />
    </Container>
  );
};

export default InputComponent;
