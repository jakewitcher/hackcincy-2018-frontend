import { Link } from 'react-router-dom';
import styled from 'styled-components';

import css from 'cssVariables';

const Header = styled.h1`
  font-size: 3.4rem;
  text-transform: capitalize;
  
  color: ${css.CLR_PRIMARY_BG};
`;

export default Header;
