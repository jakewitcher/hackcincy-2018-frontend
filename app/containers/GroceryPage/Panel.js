import styled from 'styled-components';
import cssVariables from 'cssVariables';

const Panel = styled.aside.attrs({ className: 'map-page__panel' })`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;

  font-size: 12px;

  height: 100px;
  ${'' /* min-width: 25%; */}
  width: 100vw;
  padding: 1.6rem 2.4rem;
  ${'' /* padding: 1.6rem 0; */}

  background-color: ${cssVariables.MOON_RAKER};
`;

export default Panel;
