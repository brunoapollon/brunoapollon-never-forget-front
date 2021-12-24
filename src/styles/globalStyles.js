import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-blue: #313866;
    --dark-purple: #504099;
    --light-purple: #974EC3;
    --light-pink: #FE7BBF;
    --dark-gray: #101113;
    --light-gray: #E9E9E7;
    --dark-pink: #E54072;
  }
  *{
  box-sizing: border-box;
  margin: 0;
    padding: 0;
  }
  html, body {
    height: 100vh;
    background: var(--dark-gray);
  }
  h1,h2,h3,h4,h5, p, span, input, a, button, table{
    font-family: 'Montserrat', serif;
    color: var(--light-gray)
  }
`;

export default GlobalStyle;
