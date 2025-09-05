import React from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/auth/authSlice';

const Task28_ReduxMiddleware = () => {
  const dispatch = useDispatch();

  const handleDispatchAction = () => {
    // Dispatch a sample action to see the logger middleware in action
    const mockUser = { name: 'Middleware Tester', email: 'tester@example.com' };
    dispatch(loginSuccess({ user: mockUser, token: 'temp-token' }));
  };

  return (
    <div>
      <h2>Task 28: Redux Middleware for Logging</h2>
      <div className="description">
        <p>
          Middleware is a powerful feature in Redux that allows you to intercept actions before they reach the reducer. This is the perfect place to handle side effects like logging, API calls, or routing.
        </p>
        <p>
          This project has been updated to include a simple logger middleware.
        </p>
        <ul>
          <li>The middleware is defined and added to the store in <code>src/store.js</code>.</li>
          <li>It intercepts every action, logs the action itself, the state *before* the action, and the state *after* the action to the browser's console.</li>
          <li>This is incredibly useful for debugging state changes.</li>
          <li>More advanced versions could be used to send error reports to a service like Sentry or LogRocket.</li>
        </ul>
        <p>
          <strong>To see it work:</strong> Open your browser's developer console and click the button below. You will see the logs from the middleware.
        </p>
      </div>
      <button onClick={handleDispatchAction}>Dispatch Sample Action</button>
    </div>
  );
};

export default Task28_ReduxMiddleware;
