import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6.25em;
  margin: 1em 1em 0 0;
  display: flex;
  padding: 0.625em;
  flex-direction: column;
  justify-content: center;
  background: var(--dark-gray);
  border-radius: 0.3125em;
  filter: brightness(5);
  > p {
    font-weight: 400;
  }
  > span {
    color: var(--light-purple);
    align-self: flex-end;
  }
`;
