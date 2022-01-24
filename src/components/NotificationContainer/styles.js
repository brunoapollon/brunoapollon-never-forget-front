import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  width: 18.75em;
  height: 37.5em;
  background-color: var(--light-gray);
  top: 6.25em;
  right: 2.5em;
  position: absolute;
  padding: 0.625em;
  > h2 {
    color: var(--dark-gray);
    margin-bottom: 00.625em;
  }
`;
