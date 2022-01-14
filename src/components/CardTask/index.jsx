import React, { useState, useCallback } from 'react';

import api from '../../services/api';
import { useAuth } from '../../hooks/authHook';

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

const CardTask = function ({
  task_id,
  title,
  description,
  status,
  deadline,
  finished,
}) {
  const { token } = useAuth();

  const [finishedState, setFinishedState] = useState(finished);

  const handleFinishTask = useCallback(async () => {
    api.defaults.headers.authorization = `Barer ${token}`;

    await api.put(`tasks/finished/${task_id}`);

    setFinishedState(!finished);
  }, []);

  const handleDeleteTask = useCallback(async () => {
    await api.delete(`tasks/delete_task/${task_id}`);
  }, []);

  return (
    <Container>
      <HeaderCard>
        <button onClick={handleDeleteTask}>Excluir tarefa</button>
        <Title>{title}</Title>
        <div>
          {finishedState ? (
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
      {!finishedState && (
        <Button type="button" onClick={() => handleFinishTask()}>
          Finalizar
        </Button>
      )}
    </Container>
  );
};

export default CardTask;
