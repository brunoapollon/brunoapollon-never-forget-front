import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 2.75em;
  margin-top: 1.25em;
  color: var(--light-gray);
  border: 0.125em solid var(--dark-gray);
  border-radius: 0.3125em;
  background: var(--dark-blue);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 5px 5px 5px black;
  button {
    background: transparent;
    border: none;
  }
  &:hover {
    filter: brightness(1.5);
  }
`;
