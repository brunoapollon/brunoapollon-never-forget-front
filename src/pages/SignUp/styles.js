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
