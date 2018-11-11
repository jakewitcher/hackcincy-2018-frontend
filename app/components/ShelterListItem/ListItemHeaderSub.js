import styled from 'styled-components';
import { lighten } from 'polished';


import css from 'cssVariables';

export const ListItemHeaderSub = styled.p.attrs({
  className: 'list-item__sub-header',
})`
  font-size: 1.6rem;

  color: ${lighten(0.4, css.CLR_PRIMARY_BG)};
`;

export default ListItemHeaderSub;
