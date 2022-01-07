import React, { useCallback, createRef } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/authHook';

import { Container, Content, Button } from './styles';

const Profile = function () {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Criar nova tarefa!</h1>
        <form>
          <h4>Título da tarefa:</h4>
          <Input type="text" name="titulo" />
          <h4>Descrição da tarefa:</h4>
          <Input type="text" name="description" />
          <h4>Data da tarefa:</h4>
          <Input type="date" name="date" />
          <h4>Horário da tarefa:</h4>
          <Input type="time" name="date" />
          <Button type="submit">Criar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Profile;
