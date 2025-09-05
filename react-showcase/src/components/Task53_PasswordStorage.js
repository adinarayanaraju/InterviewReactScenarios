import React from 'react';

const Task53_PasswordStorage = () => {
  return (
    <div>
      <h2>Task 53: Secure Password Storage (Conceptual)</h2>
      <div className="description">
        <p>
          Storing user passwords securely is one of the most critical responsibilities of a web application. <strong>Passwords should never, under any circumstances, be stored in plain text.</strong> This is a purely backend concern.
        </p>

        <h3>The Correct Process: Hashing with a Salt</h3>
        <ol>
          <li>
            <strong>User Signup:</strong> A user enters their password in the React frontend. The password is sent over HTTPS to the backend server.
          </li>
          <li>
            <strong>Salting:</strong> The backend generates a unique, random string called a "salt" for this specific user.
          </li>
          <li>
            <strong>Hashing:</strong> The backend uses a strong, slow hashing algorithm like <strong>bcrypt</strong> or <strong>Argon2</strong>. It combines the user's password with the unique salt and feeds it into the hashing algorithm.
            <pre><code>
{`// Example using bcrypt in a Node.js backend
const salt = await bcrypt.genSalt(10); // 10 is the salt round
const hashedPassword = await bcrypt.hash(plainTextPassword, salt);`}
            </code></pre>
          </li>
          <li>
            <strong>Storage:</strong> The backend stores the <strong>hashed password</strong> and the <strong>salt</strong> in the user's database record. The original plain text password is discarded immediately.
          </li>
        </ol>

        <h3>Login Validation Process</h3>
        <ol>
          <li>
            <strong>User Login:</strong> The user submits their password via the React app.
          </li>
          <li>
            <strong>Fetch User:</strong> The backend retrieves the user's record from the database, which includes their stored hashed password and salt.
          </li>
          <li>
            <strong>Compare:</strong> The backend takes the password submitted during login, combines it with the user's stored salt, and hashes it using the *same* algorithm. It then performs a timing-safe comparison between this newly generated hash and the hash stored in the database.
            <pre><code>
{`const isValid = await bcrypt.compare(submittedPassword, storedHash);`}
            </code></pre>
          </li>
          <li>If the hashes match, the password is correct, and the user is logged in. If not, the login fails.</li>
        </ol>

        <h3>Why this is Secure</h3>
        <ul>
          <li><strong>One-Way:</strong> Hashing is a one-way process. It's computationally infeasible to reverse the hash to get the original password.</li>
          <li><strong>Salting:</strong> The salt is crucial. Even if two users have the same password, their stored hashes will be different because their salts are different. This prevents "rainbow table" attacks.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task53_PasswordStorage;
