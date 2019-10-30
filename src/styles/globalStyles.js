import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;
