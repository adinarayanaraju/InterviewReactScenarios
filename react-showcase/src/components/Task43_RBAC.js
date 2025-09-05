import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../features/auth/authSlice';

// A component that should only be visible to admins
const AdminPanel = () => (
  <div style={{ border: '2px solid #ae2012', padding: '1rem', marginTop: '1rem' }}>
    <h3>Secret Admin Panel</h3>
    <p>This panel is only visible to users with the 'admin' role.</p>
    <button>Manage Users</button>
  </div>
);

const Task43_RBAC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const [role, setRole] = useState('user');

  const handleLogin = () => {
    // Dispatch login with the selected role
    const mockUser = { name: `Test ${role}`, role: role };
    dispatch(loginSuccess({ user: mockUser, token: `fake-token-for-${role}` }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Task 43: Role-Based Access Control (RBAC)</h2>
      <div className="description">
        <p>RBAC is the practice of restricting access to UI elements or entire pages based on a user's role.</p>
        <ul>
          <li>The user's role (e.g., 'user' or 'admin') is typically included in their JWT or fetched from a profile endpoint.</li>
          <li>In this demo, we store the user object, including their role, in our Redux state upon login.</li>
          <li>We then use conditional rendering (<code>&#123;user?.role === 'admin' && &lt;AdminPanel /&gt;&#125;</code>) to show or hide components.</li>
        </ul>
      </div>

      {!isAuthenticated ? (
        <div>
          <h3>Select a role to log in as:</h3>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button onClick={handleLogin} style={{ marginLeft: '1rem' }}>Login</button>
        </div>
      ) : (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <p>Your current role is: <strong>{user.role}</strong></p>
          <button onClick={handleLogout}>Logout</button>

          {/* This is the core of the RBAC check */}
          {user?.role === 'admin' && <AdminPanel />}
        </div>
      )}
    </div>
  );
};

export default Task43_RBAC;
