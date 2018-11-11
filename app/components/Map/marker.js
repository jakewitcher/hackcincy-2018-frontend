import React from 'react';
import styled from 'styled-components';
const baseColor = '#ff8800;';

function scaleMarker(demand) {
  if (demand >= 15) {
    return 30;
  }
  return demand * 2.5;
}

function colorChange(focus) {
  if (focus) {
    return 'red';
  }
  return false;
}

export function Marker(props) {
  const Container = styled.button`
    width: ${scaleMarker(props.demand)}px;
    height: ${scaleMarker(props.demand)}px;
    border: 1px solid #663600;
    border-radius: 50% 50% 50% 0;
    cursor: pointer;
    background: ${colorChange(props.focus) || baseColor};
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -20px 0 0 -20px;
    opacity: 0.7;
  `;
  return (
    <Container
      onMouseEnter={() => props.focusMarker(props.lat)}
      onMouseLeave={() => props.resetMarker(props.lat)}
    />
  );
}

export default Marker;
