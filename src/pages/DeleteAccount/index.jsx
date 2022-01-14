import React, { useCallback } from 'react';

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

import Container from '../../components/ContainerDefault';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/authHook';

import api from '../../services/api';

import { Content, BackToProfile } from './styles';

const DeleteAccount = function () {
  const { signOut, token } = useAuth();

  const handleDeleteUserAccount = useCallback(async () => {
    api.delete('users/delete_account', {
      headers: { Authorization: `Barer ${token}` },
    });
    signOut();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h1>Atenção!</h1>
        <p>
          Ao deletar sua conta, todos seusd dados serão apagados da aplicação,
          inclusive suas tarefas!
        </p>
        <Button onClick={handleDeleteUserAccount}>Deletar sua conta</Button>
        <BackToProfile>
          <div>
            <MdOutlineKeyboardArrowLeft size={25} color="#504099" />
            <a href="/profile">
              <span>Voltar</span>
            </a>
          </div>
        </BackToProfile>
      </Content>
    </Container>
  );
};

export default DeleteAccount;
