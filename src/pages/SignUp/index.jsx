import React, { useCallback, createRef } from 'react';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import api from '../../services/api';
import Button from '../../components/Button';

import { Container, Content, FooterForm } from './styles';

import Input from '../../components/Input';

const SignUp = function () {
  const inputEmailRef = createRef(null);
  const inputNameRef = createRef(null);
  const inputPasswordRef = createRef(null);

  const handleSubmitCreateAccount = useCallback(async event => {
    event.preventDefault();

    const name = inputNameRef.current.value;
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return;
    }

    await api.post('users/', { name, email, password });
    inputNameRef.current.value = '';
    inputEmailRef.current.value = '';
    inputPasswordRef.current.value = '';
  }, []);

  return (
    <Container>
      <Content>
        <h1>Never-forget</h1>
        <h2>Cadastre-se e não se esqueça de nada!</h2>
        <form onSubmit={event => handleSubmitCreateAccount(event)}>
          <Input type="text" placeholder="Digite seu nome" ref={inputNameRef} />
          <Input
            type="email"
            placeholder="Digite seu email"
            ref={inputEmailRef}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            ref={inputPasswordRef}
          />
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
