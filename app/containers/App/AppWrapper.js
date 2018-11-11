import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100%;

  flex-grow: 1;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem 1fr;
  grid-template-areas: 'header' 'content';
`;

export default AppWrapper;
