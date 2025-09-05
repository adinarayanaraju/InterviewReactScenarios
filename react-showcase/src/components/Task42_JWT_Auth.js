import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { loginSuccess, logout } from '../features/auth/authSlice';

// --- API Functions ---
const performLogin = async (username, password) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) throw new Error('Login failed');
  return response.json();
};

const fetchProfile = async (token) => {
  const response = await fetch('/api/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error('Failed to fetch profile. Token might be invalid or expired.');
  return response.json();
};
// --- End API Functions ---

const Task42_JWT_Auth = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { isAuthenticated, user, token } = useSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Use React Query to fetch the profile
  const { data: profile, error, isFetching, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchProfile(token),
    enabled: false, // Only fetch when refetch() is called
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await performLogin(username, password);
      dispatch(loginSuccess({ user: data.user, token: data.token }));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    // Clear the query cache on logout
    queryClient.clear();
  };

  return (
    <div>
      <h2>Task 42: Authentication with JWT</h2>
      {!isAuthenticated ? (
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <p>Your JWT is stored in the Redux store.</p>
          <button onClick={handleLogout}>Logout</button>
          <hr />
          <button onClick={() => refetch()} disabled={isFetching}>
            {isFetching ? 'Fetching Profile...' : 'Fetch Authenticated Profile'}
          </button>
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
          {profile && <pre><code>{JSON.stringify(profile, null, 2)}</code></pre>}
        </div>
      )}
      <div className="description">
        <p>This component demonstrates a JWT authentication flow.</p>
        <ul>
          <li>When you log in, a mock API call returns a fake JWT, which is stored in the Redux state.</li>
          <li>When you click "Fetch Authenticated Profile", the stored JWT is sent in the <code>Authorization</code> header of the request.</li>
          <li>The MSW handler for <code>/api/profile</code> checks for this header and returns protected data if the token is present.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task42_JWT_Auth;
