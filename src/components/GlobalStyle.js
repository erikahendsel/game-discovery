const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #191B20;
        font-family: 'Lato', sans-serif;
    }
    h1,h2,h3,h4,h5,h6,p,a{
        color: white
    }
`;

export default GlobalStyle;
