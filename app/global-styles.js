import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;

    font-size: 62.5%;
  }

  body {
    font-family: 'PT Sans', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  label {
    margin: 0;
  }
`;

export default GlobalStyle;
