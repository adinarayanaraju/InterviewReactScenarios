import React from 'react';
import { useMutation } from '@tanstack/react-query';

const postToEndpointWithStructuredError = async () => {
  const response = await fetch('/api/structured-error', { method: 'POST' });
  if (!response.ok) {
    // Attempt to parse the JSON error body
    const errorData = await response.json().catch(() => null);
    // Throw a custom error object
    throw {
      status: response.status,
      message: errorData?.error?.message || 'An unknown error occurred',
      code: errorData?.error?.code,
      field: errorData?.error?.field,
    };
  }
  return response.json();
};

const Task58_ErrorMiddleware = () => {
  const mutation = useMutation({
    mutationFn: postToEndpointWithStructuredError,
  });

  return (
    <div>
      <h2>Task 58: Handling Structured Errors</h2>
      <div className="description">
        <p>
          A good backend API doesn't just send plain error messages. It sends structured error objects in a consistent format, which a centralized error handling middleware on the backend helps enforce.
        </p>
        <ul>
          <li>The mock API at <code>/api/structured-error</code> always returns a <code>400</code> error with a JSON body like <code>&#123;"error": &#123;"code": "VALIDATION_FAILED", "message": "...", "field": "email"&#125;&#125;</code>.</li>
          <li>The frontend can then parse this structured error to provide more specific feedback to the user.</li>
          <li>For example, we could use the <code>field</code> property to highlight the specific form input that caused the validation error.</li>
        </ul>
      </div>

      <button onClick={() => mutation.mutate()} disabled={mutation.isPending}>
        {mutation.isPending ? 'Requesting...' : 'Trigger Structured Error'}
      </button>

      {mutation.isError && (
        <div style={{ color: 'red', marginTop: '1rem' }}>
          <h4>Error Details:</h4>
          <pre><code>{JSON.stringify(mutation.error, null, 2)}</code></pre>
        </div>
      )}
    </div>
  );
};

export default Task58_ErrorMiddleware;
