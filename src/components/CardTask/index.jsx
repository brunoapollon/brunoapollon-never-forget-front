import React from 'react';

import {
  Container,
  Title,
  Description,
  HeaderCard,
  FooterCard,
  Button,
  Status,
  StatusCircle,
} from './styles';

const CardTask = function () {
  return (
    <Container>
      <HeaderCard>
        <Title>Fazer o Dashboard</Title>
        <Status title="teste tooltip" status="ugercy">
          <StatusCircle size={25} status="ugercy" />
        </Status>
      </HeaderCard>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        euismod augue at justo volutpat, vel commodo urna consectetur. Quisque
        auctor eros ut sodales finibus. Nulla porttitor sem eu risus
        consectetur, ut bibendum nibh egestas.
      </Description>
      <FooterCard>
        <span>Expira em </span>
        <span>{new Date().toUTCString()}</span>
      </FooterCard>
      <Button type="button">Finalizar</Button>
    </Container>
  );
};

export default CardTask;
