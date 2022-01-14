import React, { useEffect, useState, useCallback } from 'react';

import CardTask from '../../components/CardTask';
import Header from '../../components/Header';
import Container from '../../components/ContainerDefault';
import TaskContainer from '../../components/TaskContainer';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/authHook';
import api from '../../services/api';

import { Content } from './styles';

const AllTasks = function () {
  const { token } = useAuth();
  const [tasksToday, setTasksToday] = useState([]);

  const [selectStatusOptions, setSelectStatusOptions] = useState(0);

  const statusListOptions = [
    { id: 0, status: 'Todas tarefas' },
    { id: 1, status: 'Sem urgência' },
    { id: 2, status: 'Proxímas' },
    { id: 3, status: 'Com urgência' },
    { id: 4, status: 'Expiradas' },
  ];

  api.defaults.headers.common.authorization = `Barer ${token}`;

  useEffect(async () => {
    const response = await api.get('tasks/allTasks');

    setTasksToday(response.data);
  }, []);

  const handleFilterFilterByStatus = useCallback(async event => {
    const status = event.target.value;

    if (status === '0') {
      const response = await api.get('tasks/allTasks');
      setTasksToday(response.data);

      return;
    }

    const response = await api.get(`tasks/filterByStatus/${status}`);
    setTasksToday(response.data);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h2>Essas são todas as tarefas criadas!</h2>
        <select onChange={handleFilterFilterByStatus}>
          {statusListOptions.map((item, index) => (
            <option key={index} value={item.id}>
              {item.status}
            </option>
          ))}
        </select>
        <TaskContainer>
          {tasksToday.length !== 0 &&
            tasksToday.map(task => (
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

export default AllTasks;
