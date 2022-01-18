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

  const [titleState, setTitleState] = useState('');
  const [descriptionState, setDescriptionState] = useState('');
  const [dateState, setDataState] = useState('');
  const [hoursState, setHoursState] = useState('');

  const socket = io('http://localhost:3333');

  const [newTasks, setNewTasks] = useState([]);

  socket.on('new_task', newTask => {
    setNewTasks([...newTasks, newTask]);
  });

  const handleSubmitCreateTask = useCallback(async event => {
    event.preventDefault();

    const title = titleState;
    const description = descriptionState;
    const deadline = `${dateState} ${hoursState}`;

    setTitleState('');
    setDescriptionState('');
    setDataState('');
    setHoursState('');

    if (
      title.trim() === '' ||
      description.trim() === '' ||
      deadline.trim() === ''
    ) {
      return;
    }

    try {
      await api.post(
        'tasks/',
        { title, description, deadline },
        { headers: { Authorization: `Bearer ${token}` } },
      );
    } catch (error) {}
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h1>Criar nova tarefa!</h1>
        <Form onSubmit={event => handleSubmitCreateTask(event)}>
          <h4>Título da tarefa:</h4>
          <Input
            type="text"
            name="title"
            value={titleState}
            onChange={event => setTitleState(event.target.value)}
          />
          <h4>Descrição da tarefa:</h4>
          <Input
            type="text"
            name="description"
            value={descriptionState}
            onChange={event => setDescriptionState(event.target.value)}
          />
          <h4>Data da tarefa:</h4>
          <Input
            type="date"
            name="date"
            value={dateState}
            onChange={event => setDataState(event.target.value)}
          />
          <h4>Horário da tarefa:</h4>
          <Input
            type="time"
            name="time"
            value={hoursState}
            onChange={event => setHoursState(event.target.value)}
          />
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
