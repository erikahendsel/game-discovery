const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    //Scrollbar styles
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
    }
    body {
        background: #191B20;
        font-family: 'Lato', sans-serif;
        width: 100%;
    }
    h1,h2,h3,h4,h5,h6,p,a{
        color: white;
        font-family: 'Lato', sans-serif;
    }
    p {
        font-size: 1rem;
        line-height: 200%;
    }
    h3 {
        font-size: 1.2rem;
        @media only screen and (min-width: 750px) {
            font-size: 1.5rem;
        }
    }
    a { 
        text-decoration: none;
    }
    img {
        display: block;
    }
    input, button {
        font-family: 'Lato', sans-serif;
    }
    input {
        font-weight: bold;
    }
    img {
        display: block;
    }
`;

export default GlobalStyle;
