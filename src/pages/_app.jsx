import styled, { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { GlobalStyle, darkTheme } from '../utils/themes';
import { Header, Footer } from '../components';

import { client } from '../utils/api-client';

const AppContainer = styled.div`
    padding-top: 80px;

    @media (max-width: 600px) {
        padding-top: 60px;
    }
`;

const MyApp = ({ Component, pageProps }) => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyle />
                <Header />
                <AppContainer>
                    <Component {...pageProps} />
                </AppContainer>
                <Footer />
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default MyApp;
