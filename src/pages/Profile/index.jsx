import React, { useCallback, createRef } from 'react';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/authHook';

import { Container, Content, Button, FooterForm } from './styles';

const Profile = function () {
  const { user, updateUser } = useAuth();

  const inputNameRef = createRef(null);
  const inputEmailRef = createRef(null);

  const handleUpdateUser = useCallback(async () => {
    const name = inputNameRef.current.value;
    const email = inputEmailRef.current.value;

    if (email.trim() === '' && name.trim() === '') return;

    try {
      await updateUser({ name, email });
      inputEmailRef.current.value = '';
      inputNameRef.current.value = '';
    } catch (error) {
      inputEmailRef.current.value = '';
      inputNameRef.current.value = '';
    }
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h1>Seu perfil! Edite seus dados.</h1>
        <form onSubmit={() => handleUpdateUser()}>
          <h4>Name:</h4>
          <Input
            type="text"
            name="name"
            placeholder={user.name}
            ref={inputNameRef}
          />
          <h4>Email:</h4>
          <Input
            type="email"
            name="email"
            placeholder={user.email}
            ref={inputEmailRef}
          />
          <Button type="submit">Editar</Button>
        </form>
        <FooterForm>
          <a href="/change_password">
            <span>Alterar senha</span>
          </a>
          <MdOutlineKeyboardArrowRight size={25} color="#504099" />
        </FooterForm>
      </Content>
    </Container>
  );
};

export default Profile;
