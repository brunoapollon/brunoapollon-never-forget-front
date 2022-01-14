import styled from 'styled-components';

export const Content = styled.div`
  max-width: 63.75em;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  > button {
    background-color: var(--dark-purple);
    font-size: 1.5em;
    width: 12.5em;
    margin: 1em 0;
  }
`;

export const BackToProfile = styled.footer`
  > div {
    display: flex;
    align-items: center;
  }
  a,
  span {
    text-decoration: none;
    color: var(--dark-purple);
    &:hover {
      text-decoration: underline;
    }
  }
`;
