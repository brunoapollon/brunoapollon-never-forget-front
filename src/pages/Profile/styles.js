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

export const FooterForm = styled.footer`
  width: 18.75em;
  display: flex;
  align-items: center;
  align-self: flex-end;
  > a,
  span {
    text-decoration: none;
    color: var(--dark-purple);
    &:hover {
      text-decoration: underline;
    }
  }
`;
