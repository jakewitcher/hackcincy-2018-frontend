import styled from 'styled-components';

const Panel = styled.aside.attrs({ className: 'map-page__panel' })`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;

  background-color: #fff;

  height: 100%;
  min-width: 25%;
  padding: 1.6rem 2.4rem;

  transform: translateX(-100%);

  transition: transform 600ms ease-in-out;
  &.active {
    transform: translateX(0);
  }
`;

export default Panel;
