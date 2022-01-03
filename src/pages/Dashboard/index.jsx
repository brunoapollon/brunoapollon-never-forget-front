import React from 'react';
import CardTask from '../../components/CardTask';
import Header from '../../components/Header';

import { Container, Content, TaskContainer } from './styles';

const Dashboard = function () {
  return (
    <Container>
      <Header />
      <Content>
        <h2>Essas são suas tarefas marcadas para hoje!</h2>
        <TaskContainer>
          <CardTask />
        </TaskContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
