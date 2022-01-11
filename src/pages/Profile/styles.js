import styled from 'styled-components';

export const Content = styled.div`
  max-width: 63.75em;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
