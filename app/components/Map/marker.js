import React from 'react';
import styled from 'styled-components';

export function Marker(props) {
  const Container = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    background: #ff8800;
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -20px 0 0 -20px;

    opacity: 0.7;
    ${'' /* &:after {
      content: '';
      width: ${2 * props.demand}px;
      height: ${2 * props.demand}px;
      margin: 8px 0 0 8px;
      background: #f4f1eb;
      position: absolute;
      border-radius: 50%;
    } */}
  `;
  return <Container />;
}

export default Marker;
