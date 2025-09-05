import React, { useRef, useState } from 'react';

const Task18_UseRefFocus = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Create refs for the input elements
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation logic
    if (!username) {
      setError('Username is required.');
      // Focus the username input
      usernameRef.current.focus();
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      // Focus the password input
      passwordRef.current.focus();
      return;
    }

    // On successful submission
    alert('Form submitted successfully!');
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Task 18: useRef for Focus Management</h2>
      <form onSubmit={handleSubmit} noValidate>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={usernameRef} // Attach the ref
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={passwordRef} // Attach the ref
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="description">
        <p>
          The <code>useRef</code> hook can hold a reference to a DOM node, allowing you to interact with it directly.
        </p>
        <ul>
          <li>We create a `ref` for each input field using `useRef()`.</li>
          <li>These refs are attached to the input elements via the `ref` prop.</li>
          <li>When the form is submitted with invalid data, we call `.focus()` on the `current` property of the ref corresponding to the first invalid field.</li>
          <li><strong>To test:</strong> Click "Submit" with one or both fields empty. The cursor will automatically jump to the required field.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task18_UseRefFocus;
