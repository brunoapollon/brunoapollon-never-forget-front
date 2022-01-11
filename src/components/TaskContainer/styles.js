import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3.75em;
  display: flex;
  flex-wrap: wrap;
  div:nth-child(3n + 1) {
    margin-left: 0;
  }
`;
