// @flow
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

// Create HTTP link
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
});

// Create auth link
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // Add auth headers here if needed
    }
  };
});

// Create Apollo Client
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});

// Mock wsLink for now
export const wsLink = {
  subscriptionClient: {
    on: () => {},
  },
};