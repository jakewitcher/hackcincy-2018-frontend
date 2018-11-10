import styled from 'styled-components';

const AppWrapper = styled.div`
  flex-grow: 1;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem 1fr 4rem;
  grid-template-areas: 'header' 'content' 'footer';
`;

export default AppWrapper;
