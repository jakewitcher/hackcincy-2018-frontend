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

    font-family: 'PT Sans Caption', sans-serif;
    letter-spacing: 1rem;
    font-weight: 600;

    cursor: pointer;

    &::first-line {
      font-weight: 100;
    }

    transition: all 400ms;
    &:hover {
      background-color: ${css.CLR_PIZAZZ};
      color: #fff;
      border-width: 0px;
    }
  }
`;

export default HeaderIcon;
