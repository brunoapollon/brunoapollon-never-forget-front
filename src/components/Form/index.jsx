import React from 'react';

import { Container } from './styles';

const Form = function ({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

export default Form;
