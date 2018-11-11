import styled from 'styled-components';

import css from 'cssVariables';

const HeaderIcon = styled.div`
  grid-area: header-icon;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;

  a {
    border: 2px solid ${css.CLR_PIZAZZ};
    padding: 1rem;
    padding-left: 2.4rem;

    letter-spacing: 1rem;
    ${'' /* margin: 2rem 4rem; */}

    font-weight: 600;

    &::first-line {
      font-weight: 100;
    }
  }
`;

export default HeaderIcon;
