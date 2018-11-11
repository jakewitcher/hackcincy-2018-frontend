import styled from 'styled-components';
import { lighten } from 'polished';

import css from 'cssVariables';

const HeaderSub = styled.p`
  font-size: 2rem;

  color: ${lighten(0.4, css.CLR_PRIMARY_BG)};
`;

export default HeaderSub;
