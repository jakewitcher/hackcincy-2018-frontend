import styled from 'styled-components';

import cssVar from 'cssVariables';

const Content = styled.main`
  grid-area: content;

  max-height: 100%;
  overflow: hidden;

  ${'' /* background-color: ${cssVar.CLR_PRIMARY_BG}; */}
`;

export default Content;
