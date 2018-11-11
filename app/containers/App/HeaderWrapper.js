import styled from 'styled-components';
import cssVariables from 'cssVariables';

const HeaderWrapper = styled.aside`
  grid-area: header;

  display: grid;
  grid-template-areas: 'header-icon header-menu';
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 100px;

  background-color: white;
  opacity: 0.8;
  box-shadow: ${cssVariables.BOX_SHADOW_XS};
  position: relative;
  z-index: 3;
`;

export default HeaderWrapper;
