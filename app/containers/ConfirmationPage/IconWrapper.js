import styled from 'styled-components';

import css from 'cssVariables';

const IconWrapper = styled.div.attrs({
  className: 'confirmation-page__icon-wrapper',
})`
  font-size: 4rem;

  color: ${css.CLR_PIZAZZ};
`;

export default IconWrapper;
