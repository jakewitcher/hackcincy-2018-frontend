import styled from 'styled-components';

import css from 'cssVariables';

const Toggle = styled.button.attrs({ className: 'map-page__toggle' })`
  position: absolute;

  z-index: 2;

  font-size: 2rem;

  &.center {
    top: 50%;
    left: 50%;
    ${'' /* transform: translateX(-50%); */}
    transform: translate(-50%, -50%);
  }

  &.right {
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }

  &.left {
    top: 2rem;
    left: 2rem;
  }

  ${'' /* background-color: #fff; */}
  color: ${css.CLR_PRIMARY_BG};
`;

export default Toggle;
