import React, { useCallback, createRef } from 'react';

import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Button, Container, Content, FooterForm } from './styles';

import Input from '../../components/Input';

import { useAuth } from '../../hooks/authHook';

const Login = function () {
  const inputEmailRef = createRef(' ');
  const inputPassRef = createRef(' ');
  const { signIn } = useAuth();

  const handleLogin = useCallback(async event => {
    event.preventDefault();

    const email = inputEmailRef.current.value;
    const password = inputPassRef.current.value;

    if (email.trim() === '' || password.trim() === '') return;

    await signIn({ email, password });
  });

  return (
    <Container>
      <Content>
        <h1>Never-forget</h1>
        <h2>Faça seu Login</h2>
        <form onSubmit={event => handleLogin(event)}>
          <Input
            type="email"
            placeholder="Digite seu email"
            name="email"
            ref={inputEmailRef}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            ref={inputPassRef}
          />
          <Button type="submit">Entrar</Button>
        </form>
        <FooterForm>
          <MdKeyboardArrowLeft size={25} color="#504099" />
          <a href="/signup">
            <span>Cadastre-se!</span>
          </a>
        </FooterForm>
      </Content>
    </Container>
  );
};

export default Login;
