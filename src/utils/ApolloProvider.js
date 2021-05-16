import React from 'react';
import App from '../pages/index';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({
    uri: 'https://api-eu-central-1.graphcms.com/v2/ckoriclm9u0bf01xn4a33f2zi/master'
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
