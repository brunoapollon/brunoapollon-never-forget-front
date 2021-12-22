import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
`;

export const Content = styled.div`
  max-width: 31.25em;
  height: 37.5em;
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h1 {
    color: var(--dark-blue);
    cursor: default;
  }
  > h2 {
    color: var(--dark-gray);
    cursor: default;
  }
  > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em 6.25em;
  }
  box-shadow: 10px 5px 5px black;
`;

export const Button = styled.button`
  width: 15.625em;
  height: 2.75em;
  margin-top: 1.25em;
  color: var(--dark-gray);
  border: 0.125em solid var(--dark-gray);
  border-radius: 0.3125em;
  background: transparent;
  align-self: flex-end;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 10px 5px 5px black;
  &:hover {
    background: var(--dark-blue);
    filter: brightness(1.5);
  }
`;

export const FooterForm = styled.footer`
  width: 18.75em;
  display: flex;
  align-items: center;
  > a,
  span {
    text-decoration: none;
    color: var(--dark-purple);
    &:hover {
      text-decoration: underline;
    }
  }
`;
