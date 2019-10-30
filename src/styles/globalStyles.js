import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Audiowide&display=swap');

  * {
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    padding: 0;
    margin: 0;
  }
`;
