import React from 'react';
import { useQuery } from '@tanstack/react-query';

// A mock fetch function that hits an API endpoint that we will mock with MSW.
const fetchUser = async () => {
  const response = await fetch('/api/user');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


const Task34_MockingAPI = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ['msw-user'],
    queryFn: fetchUser
  });

  return (
    <div>
      <h2>Task 34: Mocking API Calls with MSW</h2>
      <div className="description">
        <p>
          Mock Service Worker (MSW) is an API mocking library that uses the Service Worker API to intercept real network requests and return mocked data. This is extremely powerful for both development and testing.
        </p>
        <p>
          This project has MSW set up to run in the development environment.
        </p>
        <ul>
          <li>The mock API definitions are in <code>src/mocks/handlers.js</code>. We have defined a handler for <code>/api/user</code>.</li>
          <li>The service worker is configured in <code>src/mocks/browser.js</code> and started in <code>src/index.js</code>.</li>
          <li>The component below makes a real <code>fetch</code> call to <code>/api/user</code>. However, MSW intercepts this call and returns the mocked data from our handler instead.</li>
          <li>You can verify this by opening your browser's Network tab. You will see the request, but it will be marked as being handled by a service worker, and the response will match our mock.</li>
        </ul>
      </div>

      <h3>User Data from Mock API:</h3>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {data && (
        <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
      )}
    </div>
  );
};

export default Task34_MockingAPI;
