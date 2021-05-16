import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
    background: {
        400: '#E5E5E5',
        500: '#FFFFFF'
    },
    textPrimary: {
        500: '#18181B'
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

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        color: ${({ secondary, theme }) =>
            secondary ? theme.colorSecondary[500] : theme.textPrimary[500]};
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${({ secondary, theme }) =>
            secondary ? theme.textSecondary[500] : theme.textPrimary[500]};
    }

    h3 {
        font-size: 1.3rem;
        font-weight: 500;
        color: ${({ secondary, theme }) =>
            secondary ? theme.textSecondary[500] : theme.textPrimary[500]};
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ secondary, theme }) =>
            secondary ? theme.textSecondary[500] : theme.textPrimary[500]};
    }

`;
