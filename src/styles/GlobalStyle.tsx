import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
    
    .custom-select__placeholder {
    text-transform: none !important;
    }
    
    .custom-select__single-value {
    text-transform: none !important;
    }
    
    .custom-select__option {
    text-transform: none !important;
    }

`