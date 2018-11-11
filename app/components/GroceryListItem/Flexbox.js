import styled from 'styled-components';

import css from 'cssVariables';

export const Flexbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 24rem;
  padding: 1.6rem;
  margin: 2rem 0;

  border-radius: 0.4rem;
  box-shadow: ${css.BOX_SHADOW};
`;

export default Flexbox;
