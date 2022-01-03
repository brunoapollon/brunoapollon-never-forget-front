import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  span {
    width: 160px;
    background: ${({ status }) => {
      if (status === 'no urgency') return '#00BA03';
      if (status === 'close') return '#974EC3';
      if (status === 'ugercy') return '#FF0000';
      if (status === 'expires') return '#000000';
      return '';
    }};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: var(--light-gray);
    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ status }) => {
          if (status === 'no urgency') return '#00BA03';
          if (status === 'close') return '#974EC3';
          if (status === 'urgency') return '#FF0000';
          if (status === 'expires') return '#000000';
          return '';
        }}
        transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

export { Container };
