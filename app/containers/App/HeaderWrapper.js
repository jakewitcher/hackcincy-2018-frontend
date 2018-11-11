import styled from 'styled-components';

const HeaderWrapper = styled.aside`
  grid-area: header;

  display: grid;
  grid-template-areas: 'header-icon header-menu';
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 100px;

  background-color: white;
  opacity: 0.8;
`;

export default HeaderWrapper;
