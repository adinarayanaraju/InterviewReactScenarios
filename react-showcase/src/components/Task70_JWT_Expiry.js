import React from 'react';
import { useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { logout } from '../features/auth/authSlice';

const fetchWithExpiredToken = async () => {
  const response = await fetch('/api/profile', {
    headers: { Authorization: 'Bearer expired-token' },
  });
  if (response.status === 401) {
    // In a real app, you might try a token refresh here first.
    // For this demo, we'll just log the user out.
    throw new Error('Your session has expired. Please log in again.');
  }
  if (!response.ok) {
    throw new Error('Failed to fetch profile.');
  }
  return response.json();
};

const Task70_JWT_Expiry = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  const handleFetch = async () => {
    setError(null);
    setData(null);
    try {
      const result = await fetchWithExpiredToken();
      setData(result);
    } catch (err) {
      setError(err.message);
      // Dispatch the logout action to clear user state
      dispatch(logout());
      // Clear all query cache
      queryClient.clear();
      console.log('User logged out due to expired token.');
    }
  };

  return (
    <div>
      <h2>Task 70: Handling JWT Expiry</h2>
      <div className="description">
        <p>A critical part of JWT authentication is gracefully handling token expiration.</p>
        <ul>
          <li>When an API request is made with an expired token, the server should respond with a <code>401 Unauthorized</code> status.</li>
          <li>The frontend should catch this specific error.</li>
          <li>Upon catching a 401, the frontend should clear all user-related state (e.g., from Redux and React Query's cache) and redirect the user to the login page. This is often handled in a central place, like an Axios interceptor or a custom `fetch` wrapper.</li>
          <li>Click the button below to simulate making a request with an "expired" token. The mock API will return a 401, and the app will dispatch the logout action.</li>
        </ul>
      </div>
      <button onClick={handleFetch}>Fetch with Expired Token</button>
      {error && <p style={{ color: 'red' }}><strong>Caught Error:</strong> {error}</p>}
      {data && <p>This should not appear.</p>}
    </div>
  );
};

export default Task70_JWT_Expiry;
