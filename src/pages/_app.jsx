import { ThemeProvider } from 'styled-components';

import { GlobalStyle, darkTheme } from '../utils/themes';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
