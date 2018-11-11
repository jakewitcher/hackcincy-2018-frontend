import styled from 'styled-components';

import css from 'cssVariables';

export const HeroImage = styled.img`
  position: relative;
  ${'' /* right: -10rem;
  max-width: calc(100% + 10rem); */}

  max-width: 100%;

  box-shadow: ${css.BOX_SHADOW};
`;

export default HeroImage;
