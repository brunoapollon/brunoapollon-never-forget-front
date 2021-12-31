import React, { forwardRef } from 'react';

import { Container, Input } from './styles';

const InputComponent = forwardRef((props, ref) => (
  <Container>
    <Input {...props} ref={ref} />
  </Container>
));

export default InputComponent;
