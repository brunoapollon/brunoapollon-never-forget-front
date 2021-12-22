import React from 'react';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { Button, Container, Content, FooterForm } from './styles';

import Input from '../../components/Input';

const SignUp = function () {
  return (
    <Container>
      <Content>
        <h1>Never-forget</h1>
        <h2>Cadastre-se e não se esqueça de nada!</h2>
        <form>
          <Input type="text" placeholder="Digite seu nome" />
          <Input type="email" placeholder="Digite seu email" />
          <Input type="password" placeholder="Digite sua senha" />
          <Button type="submit">Criar conta</Button>
        </form>
        <FooterForm>
          <a href="/">
            <span>Entre em sua conta</span>
          </a>
          <MdOutlineKeyboardArrowRight size={25} color="#504099" />
        </FooterForm>
      </Content>
    </Container>
  );
};

export default SignUp;
