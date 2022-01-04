import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  max-width: 63.75em;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  > form {
    align-self: center;
    margin: 1em 0;
    input {
      border-bottom: 0.1875em solid var(--light-gray);
      color: var(--light-gray);
    }
    > h4 {
      margin: 1em 0;
      font-size: 1.5em;
      color: var(--light-gray);
    }
  }
`;

export const Button = styled.button`
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
  &:hover {
    filter: brightness(1.5);
  }
`;
