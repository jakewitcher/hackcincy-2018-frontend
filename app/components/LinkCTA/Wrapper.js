import { Link } from 'react-router-dom';
import styled from 'styled-components';

import css from 'cssVariables';

export const Wrapper = styled(Link)`
  all: unset;
  font-family: 'Raleway', sans-serif;
  font-size: 2.4rem;
  text-align: center;
  ${'' /* text-transform: uppercase; */}

  ${'' /* color: ${css.CLR_PIZAZZ};
  border: 2px solid ${css.CLR_PIZAZZ}; */}

  padding: 1.6rem 4rem;
  border-radius: 5rem;

  color: #fff;
  background-image: linear-gradient(to right, #ff8800, #ff9900, #ffab00, #ffbb00, #ffcc00);

  cursor: pointer;

  box-shadow: ${css.BOX_SHADOW_SM};

  transition: all 600ms;

  &:hover {
    ${'' /* color: #fff;
    background-color: ${css.CLR_PIZAZZ}; */}
    box-shadow: ${css.BOX_SHADOW};
  }
`;

export default Wrapper;
