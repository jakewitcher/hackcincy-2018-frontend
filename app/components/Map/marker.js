import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import css from 'cssVariables';
const baseColor = '#ff8800;';

function scaleMarker(demand) {
  if (demand >= 15) {
    return 30;
  }
  return demand * 0.5;
}

function colorChange(focus) {
  if (focus) {
    return 'red';
  }
  return false;
}

function displayName(focus) {
  if (focus) {
    return 'block';
  }
  return 'none';
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

  const ShelterName = styled.div`
    display: ${displayName(props.focus)};
    box-shadow: ${css.BOX_SHADOW_SM};
    align-items: center;
    width: 100px;
    position: relative;
    z-index: 2;
    font-weight: bold;
    background: white;
    padding: 10px;
    `;

  return (
    <div>
      <Link to="/grocery">
        <Container
          onMouseEnter={() => props.focusMarker(props.lat)}
          onMouseLeave={() => props.resetMarker(props.lat)}
        />
      </Link>
      <ShelterName>
        <p>{props.text}</p>
      </ShelterName>
    </div>
  );
}

export default Marker;
