import React from 'react';
import { useQuery } from '@tanstack/react-query';

// This fetch function will be intercepted by MSW
const fetchProducts = async () => {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Task41_REST_API = () => {
  const { data: products, error, isPending } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return (
    <div>
      <h2>Task 41: REST API Integration</h2>
      <div className="description">
        <p>
          This component demonstrates fetching data from a REST API endpoint using React Query. The API call is intercepted by Mock Service Worker (MSW).
        </p>
        <ul>
          <li>The <code>useQuery</code> hook handles the entire lifecycle of the data fetching: loading, error, and success states.</li>
          <li>The mock API handler for <code>/api/products</code> is defined in <code>src/mocks/handlers.js</code>.</li>
          <li>This setup allows for developing and testing the frontend independent of the backend.</li>
        </ul>
      </div>

      <h3>Product List</h3>
      {isPending && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {products && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - <strong>${product.price}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task41_REST_API;
