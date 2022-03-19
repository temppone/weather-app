import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smooothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.font.family};
  }
`;
