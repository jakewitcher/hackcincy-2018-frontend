import styled from 'styled-components';

import Header from 'components/Header';

const PanelHeader = styled(Header).attrs({ className: 'panel__header' })`
  position: relative;
`;

export default PanelHeader;
