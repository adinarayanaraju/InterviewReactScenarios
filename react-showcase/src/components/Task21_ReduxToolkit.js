import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../features/auth/authSlice';

const Task21_ReduxToolkit = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      // In a real app, you'd call an API here.
      // For this demo, we'll dispatch success immediately with mock data.
      const mockUser = { name: username, email: `${username}@example.com` };
      const mockToken = 'fake-jwt-token-12345';
      dispatch(loginSuccess({ user: mockUser, token: mockToken }));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Task 21: Redux Toolkit for Authentication</h2>

      {isAuthenticated ? (
        <div className="auth-container">
          <h3>Welcome, {user?.name}!</h3>
          <p>You are logged in. Your session is persisted in local storage.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <h3>Please Log In</h3>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}

      <div className="description">
        <p>This component demonstrates a full authentication flow using Redux Toolkit.</p>
        <ul>
          <li>The authentication state (user, token, isAuthenticated) is managed in a Redux "slice" located at <code>src/features/auth/authSlice.js</code>.</li>
          <li>The Redux store is configured in <code>src/store.js</code>.</li>
          <li>A custom middleware saves the auth state to <code>localStorage</code> on every change, allowing the session to persist across page reloads.</li>
          <li>The UI uses <code>useSelector</code> to read the auth state and <code>useDispatch</code> to send login/logout actions.</li>
          <li><strong>To test:</strong> Log in, then reload the page. You should remain logged in.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task21_ReduxToolkit;
