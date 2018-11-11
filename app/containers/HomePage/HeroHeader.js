import styled from 'styled-components';

import css from 'cssVariables';

export const HeroHeader = styled.h1`
  font-size: 10vh;
  line-height: 1;

  color: ${css.CLR_PIZAZZ};
  &::first-line {
    color: #000;
  }
`;

export default HeroHeader;
