import React, { useEffect, useState } from 'react';

import CardTask from '../../components/CardTask';
import Header from '../../components/Header';
import Container from '../../components/ContainerDefault';
import TaskContainer from '../../components/TaskContainer';

import { useAuth } from '../../hooks/authHook';
import api from '../../services/api';

import { Content } from './styles';

const Dashboard = function () {
  const { token } = useAuth();
  const [tasksToday, setTasksToday] = useState([]);

  useEffect(async () => {
    const response = await api.get('tasks/currentTasks', {
      headers: { Authorization: `Bearer ${token}` },
    });

    setTasksToday(response.data);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h2>Essas são suas tarefas marcadas para hoje!</h2>
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
              />
            ))}
        </TaskContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
