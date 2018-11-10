import styled from 'styled-components';

// import cssVar from 'cssVariables';

const HeaderIcon = styled.div`
  ${'' /* background-color: ${cssVar.CLR_SECONDARY_BG};
  border-bottom: 1px solid ${cssVar.CLR_SECONDARY_BORDER_COLOR}; */}

  grid-area: header-icon;

  ${'' /* background-color: pink; */}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default HeaderIcon;
