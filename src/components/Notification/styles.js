import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6.25em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.625em;
  background: var(--dark-gray);
  border-radius: 0.3125em;
  filter: brightness(5);
  span {
    color: var(--light-purple);
    align-self: flex-end;
  }
  & + div {
    margin-top: 0.625em;
  }
`;
