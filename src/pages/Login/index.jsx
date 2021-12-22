import React from 'react';
import { Container, Content } from './styles';

import Input from '../components/Input';

const Login = function () {
  return (
    <Container>
      <Content>
        <h1>LOGIN</h1>
        <Input type="email" placeholder="Digite seu email" />
        <Input type="password" placeholder="Digite sua senha" />
      </Content>
    </Container>
  );
};

export default Login;
