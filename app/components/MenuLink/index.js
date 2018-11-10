import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuLink = styled(Link)`
  all: unset;

  margin: 2rem;

  color: #000;

  font-size: 1.6rem;

  transition: transform 200ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export default MenuLink;
