import styled from 'styled-components';

export const Container = styled.div`
  width: 18.75em;
  height: 2.75em;
  border: 0.125em solid var(--dark-gray);
  border-radius: 0.3125em;
  padding: 0.3125em;
  & + div {
    margin-top: 0.625em;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: var(--dark-gray);
  font-size: 16px;
  text-align: center;
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
