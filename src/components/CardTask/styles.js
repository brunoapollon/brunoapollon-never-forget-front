import styled from 'styled-components';

export const Container = styled.div`
  width: 20.625em;
  height: max-content;
  background-color: var(--dark-purple);
  padding: 1em;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 1em;
`;

export const Description = styled.span`
  font-size: 1em;
`;

export const HeaderCard = styled.header`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
`;

export const FooterCard = styled.footer`
  margin-top: 1em;
  > span {
    font-weight: bold;
  }
`;
