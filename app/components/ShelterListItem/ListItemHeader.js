import styled from 'styled-components';

import css from 'cssVariables';

export const ListItemHeader = styled.h2.attrs({
  className: 'list-item__header',
})`
  font-size: 2.4rem;

  color: #000;

  margin-top: 1rem;
`;

export default ListItemHeader;
