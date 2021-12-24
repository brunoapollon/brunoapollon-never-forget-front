import React from 'react';
import CardTask from '../../components/CardTask';
import Header from '../../components/Header';

import { Container, Content } from './styles';

const Dashboard = function () {
  return (
    <Container>
      <Header />
      <Content>
        <CardTask />
      </Content>
    </Container>
  );
};

export default Dashboard;
