import React from 'react';
import { gql, useQuery } from '@apollo/client';

// Define the GraphQL query
const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
      name
      price
    }
  }
`;

const Task47_GraphQL_Query = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  return (
    <div>
      <h2>Task 47: GraphQL Query with Apollo Client</h2>
      <div className="description">
        <p>
          This component uses Apollo Client's <code>useQuery</code> hook to fetch data from a GraphQL endpoint.
        </p>
        <ul>
          <li>The GraphQL query is defined using the <code>gql</code> template literal tag.</li>
          <li>The <code>useQuery</code> hook handles the request lifecycle, providing <code>loading</code>, <code>error</code>, and <code>data</code> states.</li>
          <li>The request is intercepted by MSW, which parses the GraphQL query and returns the appropriate mocked response from <code>src/mocks/handlers.js</code>.</li>
        </ul>
      </div>

      <h3>Product List from GraphQL:</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.products.map(product => (
            <li key={product.id}>
              {product.name} - <strong>${product.price}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task47_GraphQL_Query;
