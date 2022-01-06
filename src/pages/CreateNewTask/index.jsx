import React, { useCallback, createRef } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/authHook';

import { Container, Content, Button } from './styles';

const Profile = function () {
  const { user } = useAuth();

  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};

export default Profile;
