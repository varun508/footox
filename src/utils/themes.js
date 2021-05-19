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
    background-color: #FFFFFF;
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

        @media (max-width: 768px){
          font-size: 3rem;
        }
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${({ secondary, theme }) =>
            secondary ? theme.textSecondary[500] : theme.textPrimary[500]};

        
        @media (max-width: 768px){
          font-size: 1.25rem;
        }
    }

    h3 {
        font-size: 1.3rem;
        font-weight: 500;
        color: ${({ secondary, theme }) =>
            secondary ? theme.textSecondary[500] : theme.textPrimary[500]};

        @media (max-width: 768px){
          font-size: 1.2rem;
        }
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ secondary, theme }) =>
            secondary ? theme.textSecondary[500] : theme.textPrimary[500]};

        @media (max-width: 600px){
          font-size: 0.875rem;
        }
    }
     &::-webkit-scrollbar {
    width: 12px;
    background: #fff;
  }

  ::-webkit-scrollbar-track {
    background: rgba($color: #000000, $alpha: 0.9);
    border-left: 8px solid white;
    border-right: 8px solid white;
  }

  ::-webkit-scrollbar-thumb {
    background: #a9afbc;
    border-radius: 10px;
    border: 4px solid white;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
`;
