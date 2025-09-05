import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Create an HTTP link to our mocked GraphQL endpoint
const httpLink = new HttpLink({
  uri: '/graphql', // MSW will intercept requests to this URI
});

// Create the Apollo Client instance
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
