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

const CardTask = function ({ title, description, status, deadline, finished }) {
  return (
    <Container>
      <HeaderCard>
        <Title>{title}</Title>
        <div>
          {finished ? (
            <Title>Tarefa finalizada!</Title>
          ) : (
            <>
              {' '}
              <h3>Status da tarefa: </h3>
              <Status title={status} status={status}>
                <StatusCircle size={25} status={status} />
              </Status>
            </>
          )}
        </div>
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
