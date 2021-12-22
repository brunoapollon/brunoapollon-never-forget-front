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
  width: 31.25em;
  height: 37.5em;
  background-color: var(--light-gray);
  > h1 {
    color: var(--dark-gray);
  }
`;
