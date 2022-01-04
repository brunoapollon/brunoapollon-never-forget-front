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

const CardTask = function ({ description, status, deadline, finished }) {
  return (
    <Container>
      <HeaderCard>
        {finished ? (
          <Title>Tarefa finalizada!</Title>
        ) : (
          <>
            {' '}
            <Title>Status da tarefa: </Title>
            <Status title={status} status={status}>
              <StatusCircle size={25} status={status} />
            </Status>
          </>
        )}
      </HeaderCard>
      <Description>{description}</Description>
      <FooterCard>
        <span>{status === 'expires' ? 'Expirou em ' : 'Expira em '}</span>
        <span>{new Date(deadline).toLocaleString()}</span>
      </FooterCard>
      {!finished && <Button type="button">Finalizar</Button>}
    </Container>
  );
};

export default CardTask;
