import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { useAuth } from '../../hooks/authHook';
import api from '../../services/api';

import { Container, Content } from './styles';

const Dashboard = function () {
  const { token } = useAuth();

  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};

export default Dashboard;
