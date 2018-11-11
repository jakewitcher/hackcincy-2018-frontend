import styled from 'styled-components';

const Panel = styled.aside.attrs({ className: 'map-page__panel' })`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;

  height: 100%;
  ${'' /* min-width: 25%; */}
  width: 30%;
  padding: 1.6rem 2.4rem;
  ${'' /* padding: 1.6rem 0; */}

  background-color: #fff;

  overflow: auto;

  transform: translateX(-100%);

  transition: transform 600ms ease-in-out;
  &.active {
    transform: translateX(0);
  }
`;

export default Panel;
