import styled from 'styled-components';

import css from 'cssVariables';

export const ListItemInfo = styled.div.attrs({
  className: 'list-item__info',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ListItemInfo;
