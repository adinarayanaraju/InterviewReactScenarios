import React from 'react';
import { useMutation } from '@tanstack/react-query';

let requestCount = 0; // Reset count for this specific demo

const fetchRateLimitedEndpoint = async () => {
  requestCount++;
  console.log(`Making request #${requestCount}`);
  const response = await fetch('/api/rate-limited');
  if (!response.ok) {
    const error = new Error('API Error');
    error.status = response.status;
    throw error;
  }
  return response.json();
};

const Task76_APIRetry = () => {
  const mutation = useMutation({
    mutationFn: fetchRateLimitedEndpoint,
    // Configure retry logic
    retry: (failureCount, error) => {
      // Only retry if the error is a 429 status code
      if (error.status === 429 && failureCount < 4) {
        return true;
      }
      return false;
    },
    retryDelay: (attemptIndex) => {
      // Exponential backoff: 1s, 2s, 4s...
      const delay = Math.pow(2, attemptIndex) * 1000;
      console.log(`Retrying in ${delay}ms... (attempt ${attemptIndex + 1})`);
      return delay;
    },
  });

  const handleRequest = () => {
    requestCount = 0; // Reset counter on each new attempt sequence
    mutation.mutate();
  }

  return (
    <div>
      <h2>Task 76: Rate-Limited API Retry with Exponential Backoff</h2>
      <div className="description">
        <p>
          When an API rate limit is hit (<code>429</code> error), it's best practice to automatically retry the request after a delay. Exponential backoff is a strategy where the delay increases exponentially with each failed attempt.
        </p>
        <ul>
          <li>React Query's <code>retry</code> and <code>retryDelay</code> options make this easy to implement.</li>
          <li>The <code>retry</code> option is configured to only retry on <code>429</code> errors, up to 3 times.</li>
          <li>The <code>retryDelay</code> option implements the exponential backoff logic.</li>
          <li><strong>To test:</strong> Click the button below. The first 3 requests will succeed. On the next click, the request will fail, and you will see the retry attempts with increasing delays in the console.</li>
        </ul>
      </div>

      <button onClick={handleRequest} disabled={mutation.isPending}>
        {mutation.isPending ? 'Requesting...' : 'Make API Request'}
      </button>

      {mutation.isPending && <p>Attempting request... Check the console for retry logs.</p>}
      {mutation.isSuccess && (
        <p style={{ color: 'green' }}>{mutation.data.message}</p>
      )}
      {mutation.isError && (
        <p style={{ color: 'red' }}>Failed after multiple retries.</p>
      )}
    </div>
  );
};

export default Task76_APIRetry;
