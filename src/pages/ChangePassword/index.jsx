import React, { useCallback, createRef } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Container from '../../components/ContainerDefault';

import { useAuth } from '../../hooks/authHook';
import api from '../../services/api';

import { Content } from './styles';

const ChangePassword = function () {
  const { token } = useAuth();

  const inputOldPassword = createRef(null);
  const inputNewPassword = createRef(null);

  const handleChangePassword = useCallback(async event => {
    event.preventDefault();

    const oldPassword = inputOldPassword.current.value;
    const newPassword = inputNewPassword.current.value;

    if (newPassword.trim() === '' && oldPassword.trim() === '') return;

    api.defaults.headers.common.authorization = `Barer ${token}`;
    const dataUpdatePassword = { oldPassword, newPassword };
    try {
      await api.put('users/update/password', dataUpdatePassword);

      inputNewPassword.current.value = '';
      inputOldPassword.current.value = '';
    } catch (error) {
      inputNewPassword.current.value = '';
      inputOldPassword.current.value = '';
    }
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h1>Altere sua senha.</h1>
        <form onSubmit={event => handleChangePassword(event)}>
          <h4>Senha antiga:</h4>
          <Input
            type="text"
            name="oldPassword"
            placeholder="Senha antiga"
            ref={inputOldPassword}
          />
          <h4>Nova senha:</h4>
          <Input
            type="text"
            name="newPassword"
            placeholder="Nova senha"
            ref={inputNewPassword}
          />
          <Button type="submit">Editar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default ChangePassword;
