import React from 'react';
import App from '../pages/index';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({
    uri: 'http://localhost:5000'
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
