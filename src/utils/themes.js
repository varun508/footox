import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
    background: {
        400: '#E5E5E5',
        500: '#FFFFFF'
    },
    textPrimary: {
        500: '#18181B',
    },
    textSecondary: {
        500: '#5B5B5B'
    },
    colorPrimary: {
        500: '#1766FF'
    },
    colorSecondary: {
        500: '#17CC75'
    },
    white: '#ffffff'
};

export const GlobalStyle = createGlobalStyle`
  html, body {
    background: #FFFFFF;
    padding: 0;
    margin: 0;
  }

    *,
    *::before,
    *::after {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
`;
