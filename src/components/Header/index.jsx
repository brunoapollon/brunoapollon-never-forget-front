import React, { createRef, useCallback, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { MdNotificationsNone } from 'react-icons/md';

import NotificationContainer from '../NotificationContainer';

import { Container, Logo, Menu, MenuItem, RightContainer } from './styles';

import { useAuth } from '../../hooks/authHook';

const Header = function () {
  const { user, signOut } = useAuth();
  const [visible, setVisible] = useState(false);

  const handleOpenAndCloseNotifications = useCallback(value => {
    setVisible(value);
  }, []);

  return (
    <Container>
      <Logo>
        <h1>Never Forget</h1>
        <span>Seja bem-vindo, {user.name}!</span>
      </Logo>
      <Menu>
        <MenuItem>
          <a href="/dashboard">Página inicial</a>
        </MenuItem>
        <MenuItem>
          <a href="/all_tasks">Todas tarefas</a>
        </MenuItem>
        <MenuItem>
          <a href="/create_task">Criar nova tarefa</a>
        </MenuItem>
      </Menu>
      <RightContainer>
        <button onClick={() => handleOpenAndCloseNotifications(!visible)}>
          <MdNotificationsNone size={25} color="#504099" />
        </button>
        <NotificationContainer visible={visible} />
        <a href="/profile">
          <AiOutlineUser size={25} color="#504099" />
          Seu perfil
        </a>
        <button type="button" onClick={() => signOut()}>
          <RiLogoutBoxRLine size={25} color="#504099" />
          Sair
        </button>
      </RightContainer>
    </Container>
  );
};

export default Header;
