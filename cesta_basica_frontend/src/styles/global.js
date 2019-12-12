import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Francois+One&display=swap" rel="stylesheet');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 18px 'Francois One', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
    html, body, #root {
    height: 100%;
  };
  `;
