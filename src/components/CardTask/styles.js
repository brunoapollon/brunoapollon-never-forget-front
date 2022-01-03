import styled from 'styled-components';
import { GrStatusGoodSmall } from 'react-icons/gr';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  width: 20.625em;
  height: max-content;
  background-color: var(--dark-purple);
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 00.3125em;
  & + div {
    margin-left: 0.625em;
  }
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
  margin: 1em 0;
  > span {
    font-weight: bold;
  }
`;

export const Button = styled.button`
  background-color: var(--dark-pink);
  padding: 1em;
  border-radius: 1.5625em;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
    box-shadow: 5px 5px 5px var(--dark-gray);
  }
`;

export const Status = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  span {
    background: var(--light-gray);
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const StatusCircle = styled(GrStatusGoodSmall)`
  color: ${({ status }) => {
    if (status === 'no urgency') return '#00BA03';
    if (status === 'close') return '#974EC3';
    if (status === 'urgency') return '#FF0000';
    if (status === 'expires') return '#000000';
    return '';
  }};
`;
