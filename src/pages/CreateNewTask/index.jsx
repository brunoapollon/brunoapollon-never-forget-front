import React, { useCallback, createRef } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/authHook';

import { Container, Content } from './styles';

const Profile = function () {
  const { token } = useAuth();

  const inputTitleRef = createRef();
  const inputDescriptionRef = createRef();
  const inputDateRef = createRef();
  const inputHoursRef = createRef();

  const handleSubmitCreateTask = useCallback(async event => {
    event.preventDefault();

    const title = inputTitleRef.current.value;
    const description = inputDescriptionRef.current.value;
    const deadline = `${inputDateRef.current.value} ${inputHoursRef.current.value}`;

    if (
      (!title.trim() === '' && !description.trim() === '') ||
      description.trim() === '' ||
      deadline.trim() === ''
    ) {
      return;
    }

    await api.post(
      'tasks/',
      { title, description, deadline },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    inputTitleRef.current.value = '';
    inputDescriptionRef.current.value = '';
    inputDateRef.current.value = '';
    inputHoursRef.current.value = '';
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h1>Criar nova tarefa!</h1>
        <form onSubmit={event => handleSubmitCreateTask(event)}>
          <h4>Título da tarefa:</h4>
          <Input type="text" name="titulo" ref={inputTitleRef} />
          <h4>Descrição da tarefa:</h4>
          <Input type="text" name="description" ref={inputDescriptionRef} />
          <h4>Data da tarefa:</h4>
          <Input type="date" name="date" ref={inputDateRef} />
          <h4>Horário da tarefa:</h4>
          <Input type="time" name="date" ref={inputHoursRef} />
          <Button type="submit">Criar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Profile;
