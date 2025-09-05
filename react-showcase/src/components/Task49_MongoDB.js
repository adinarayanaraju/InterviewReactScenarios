import React from 'react';

const Task49_MongoDB = () => {
  return (
    <div>
      <h2>Task 49: Database Integration - MongoDB (Conceptual)</h2>
      <div className="description">
        <p>
          MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. Integrating it with a React application requires a backend server to act as an intermediary.
        </p>

        <h3>Typical Architecture:</h3>
        <p>
          <strong>React Frontend &harr; Node.js/Express Backend &harr; MongoDB Database</strong>
        </p>
        <ol>
          <li>
            <strong>Frontend Request:</strong> The React app makes an API request (e.g., using <code>fetch</code> or React Query) to the backend server. For example, to get a user profile, it might call <code>GET /api/users/123</code>.
          </li>
          <li>
            <strong>Backend Logic:</strong> The Node.js/Express server receives this request. It uses a library like <code>Mongoose</code> (an Object Data Modeling library for MongoDB) or the native <code>mongodb</code> driver to connect to the MongoDB database.
          </li>
          <li>
            <strong>Database Query:</strong> The backend constructs a query to find the requested data. With Mongoose, this might look like: <code>User.findById('123')</code>.
          </li>
          <li>
            <strong>Database Response:</strong> MongoDB finds the matching document and returns it to the backend server.
          </li>
          <li>
            <strong>API Response:</strong> The backend server takes the data from the database, formats it as a JSON response, and sends it back to the React frontend.
          </li>
          <li>
            <strong>Frontend Render:</strong> The React app receives the JSON data and uses it to render the UI.
          </li>
        </ol>

        <h3>Why the Backend is Crucial</h3>
        <ul>
          <li><strong>Security:</strong> You should never connect to a database directly from a frontend application. This would expose your database credentials (connection string, username, password) to anyone using the site, which is a massive security risk.</li>
          <li><strong>Logic and Validation:</strong> The backend is responsible for validating incoming data, enforcing business rules, and ensuring data integrity before it's saved to the database.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task49_MongoDB;
