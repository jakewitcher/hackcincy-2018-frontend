import styled from 'styled-components';
import { lighten } from 'polished';

export const SecondaryLink = styled.a`
  font-size: 1.4rem;
  color: ${lighten(0.4, '#000')};

  margin-top: 2rem;
  margin: 2.4rem auto 0;
`;

export default SecondaryLink;
