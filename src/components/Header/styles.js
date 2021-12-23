import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-gray);
  padding: 0.625em;
  h1,
  span,
  a,
  button {
    color: var(--dark-gray);
    text-decoration: none;
  }
`;

export const Menu = styled.ul`
  margin-left: 1em;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  list-style: none;
  padding: 1em;
  border-radius: 0.3125em;
  > a {
    font-size: 1em;
    font-weight: bold;
  }
  &:hover {
    background: var(--dark-purple);
    > a {
      color: var(--light-gray);
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.125em;
  border-radius: 0.3125em;
  border: 0.125em solid var(--light-purple);
  > h1,
  span {
    font-weight: bold;
    color: var(--dark-purple);
  }
`;

export const Logout = styled.section`
  display: flex;
  > a,
  button {
    font-size: 1em;
    font-weight: bold;
    color: var(--dark-purple);
  }
  > a {
    display: flex;
    align-items: center;
    margin-right: 1em;
  }
  > button {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
