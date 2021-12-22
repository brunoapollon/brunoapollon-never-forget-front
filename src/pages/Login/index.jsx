import React from 'react';

import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Button, Container, Content, FooterForm } from './styles';

import Input from '../components/Input';

const Login = function () {
  return (
    <Container>
      <Content>
        <h1>Never-forget</h1>
        <h2>Faça seu Login</h2>
        <form>
          <Input type="email" placeholder="Digite seu email" />
          <Input type="password" placeholder="Digite sua senha" />
          <Button type="submit">Entrar</Button>
        </form>
        <FooterForm>
          <MdKeyboardArrowLeft size={25} color="#504099" />
          <a href="#">
            <span>Cadastre-se!</span>
          </a>
        </FooterForm>
      </Content>
    </Container>
  );
};

export default Login;
