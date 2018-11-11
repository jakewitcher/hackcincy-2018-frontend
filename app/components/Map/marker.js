import React from 'react';
import styled from 'styled-components';

function scaleMarker(demand) {
  if (demand >= 12) {
    return 60;
  }
  return demand * 5;
}

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
  `;
  return <Container />;
}

export default Marker;
