import React, { useCallback, createRef, useState } from 'react';
import io from 'socket.io-client';

import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Container from '../../components/ContainerDefault';
import TaskContainer from '../../components/TaskContainer';
import CardTask from '../../components/CardTask';

import { useAuth } from '../../hooks/authHook';

import { Content } from './styles';

const Profile = function () {
  const { token } = useAuth();

  const inputTitleRef = createRef();
  const inputDescriptionRef = createRef();
  const inputDateRef = createRef();
  const inputHoursRef = createRef();

  const socket = io('http://localhost:3333');

  const [newTasks, setNewTasks] = useState([]);

  socket.on('new_task', newTask => {
    setNewTasks([...newTasks, newTask]);
  });

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
        <Form onSubmit={event => handleSubmitCreateTask(event)}>
          <h4>Título da tarefa:</h4>
          <Input type="text" name="titulo" ref={inputTitleRef} />
          <h4>Descrição da tarefa:</h4>
          <Input type="text" name="description" ref={inputDescriptionRef} />
          <h4>Data da tarefa:</h4>
          <Input type="date" name="date" ref={inputDateRef} />
          <h4>Horário da tarefa:</h4>
          <Input type="time" name="date" ref={inputHoursRef} />
          <Button type="submit">Criar</Button>
        </Form>
        <h1>Essas são suas novas tarefas</h1>
        <TaskContainer>
          {newTasks.length !== 0 &&
            newTasks.map(task => (
              <CardTask
                key={task.id}
                title={task.title}
                description={task.description}
                deadline={task.deadline}
                status={task.status}
                finished={task.finished}
                task_id={task.id}
              />
            ))}
        </TaskContainer>
      </Content>
    </Container>
  );
};

export default Profile;
