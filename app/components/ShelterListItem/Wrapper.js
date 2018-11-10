import styled from 'styled-components';

import css from 'cssVariables';

export const Wrapper = styled.li.attrs({ className: 'shelter-list__item' })`
  all: unset;

  display: block;

  margin: 2rem 0;

  box-shadow: ${css.BOX_SHADOW};
`;

export default Wrapper;
