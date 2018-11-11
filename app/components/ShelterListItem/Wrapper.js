import styled from 'styled-components';

import css from 'cssVariables';

export const Wrapper = styled.li.attrs({ className: 'shelter-list__item' })`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 0;
  padding: 1.4rem 2rem;

  box-shadow: ${css.BOX_SHADOW_SM};

  cursor: pointer;

  transition: box-shadow 600ms;

  &:hover {
    box-shadow: ${css.BOX_SHADOW};
  }
`;

export default Wrapper;
