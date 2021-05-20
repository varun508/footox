import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { GlobalStyle, darkTheme } from '../utils/themes';
import { Header, Footer } from '../components';

import { client} from '../utils/api-client'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ApolloProvider client={client}>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
        </ApolloProvider>
    );
}

export default MyApp;
