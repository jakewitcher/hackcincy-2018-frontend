import styled from 'styled-components';

import css from 'cssVariables';

export const Wrapper = styled.button`
  font-size: 2.4rem;
  ${'' /* text-transform: uppercase; */}

  ${'' /* color: ${css.CLR_PIZAZZ};
  border: 2px solid ${css.CLR_PIZAZZ}; */}

  padding: 1.6rem 4rem;
  border-radius: 5rem;

  color: #fff;
  background-color: ${css.CLR_PIZAZZ};

  box-shadow: ${css.BOX_SHADOW_SM};

  transition: all 600ms;

  &:hover {
    ${'' /* color: #fff;
    background-color: ${css.CLR_PIZAZZ}; */}
    box-shadow: ${css.BOX_SHADOW};
  }
`;

export default Wrapper;
