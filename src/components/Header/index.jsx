import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { Container, Logo, Menu, MenuItem, Logout } from './styles';

import { useAuth } from '../../hooks/authHook';

const Header = function () {
  const { user } = useAuth();
  return (
    <Container>
      <Logo>
        <h1>Never Forget</h1>
        <span>Seja bem-vindo, {user.name}!</span>
      </Logo>
      <Menu>
        <MenuItem>
          <a href="#">Todas tarefas</a>
        </MenuItem>
      </Menu>
      <Logout>
        <a href="#">
          <AiOutlineUser size={25} color="#504099" />
          Seu perfil
        </a>
        <button type="button">
          <RiLogoutBoxRLine size={25} color="#504099" />
          Sair
        </button>
      </Logout>
    </Container>
  );
};

export default Header;
