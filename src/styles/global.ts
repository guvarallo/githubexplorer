import { createGlobalStyle } from 'styled-components';

import githubLogo from '../assets/github-logo.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5 url(${githubLogo}) no-repeat 60% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

  #logo {
    max-width: 250px;
  }
`;
