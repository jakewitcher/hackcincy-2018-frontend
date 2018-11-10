import styled from 'styled-components';

// import cssVar from 'cssVariables';

const HeaderMenu = styled.nav`
  ${'' /* background-color: ${cssVar.CLR_SECONDARY_BG}; */}
  ${'' /* background-color: yellow; */}

  grid-area: header-menu;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default HeaderMenu;
