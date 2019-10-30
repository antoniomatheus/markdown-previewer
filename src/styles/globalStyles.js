import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    padding: 0;
    margin: 0;
  }
`;
