import React from 'react';
import { useMutation } from '@tanstack/react-query';

const fetchRateLimitedEndpoint = async () => {
  const response = await fetch('/api/rate-limited');
  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('Too many requests! Please try again later.');
    }
    throw new Error('An unknown error occurred.');
  }
  return response.json();
};

const Task54_RateLimiting = () => {
  const mutation = useMutation({
    mutationFn: fetchRateLimitedEndpoint,
  });

  return (
    <div>
      <h2>Task 54: API Rate Limiting</h2>
      <div className="description">
        <p>
          API rate limiting is a backend strategy to prevent abuse. The frontend must be prepared to handle <code>429 Too Many Requests</code> errors gracefully.
        </p>
        <ul>
          <li>The mock API at <code>/api/rate-limited</code> will return a success message for the first 3 requests.</li>
          <li>On the 4th request and onwards, it will return a <code>429</code> error.</li>
          <li>The component catches this specific error and displays a user-friendly message.</li>
          <li>A more advanced implementation (see Task 76) could automatically retry the request with an exponential backoff delay.</li>
        </ul>
      </div>

      <button onClick={() => mutation.mutate()} disabled={mutation.isPending}>
        {mutation.isPending ? 'Requesting...' : 'Make API Request'}
      </button>

      {mutation.isSuccess && (
        <p style={{ color: 'green' }}>{mutation.data.message}</p>
      )}
      {mutation.isError && (
        <p style={{ color: 'red' }}>{mutation.error.message}</p>
      )}
    </div>
  );
};

export default Task54_RateLimiting;
