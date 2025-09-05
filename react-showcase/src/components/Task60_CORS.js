import React from 'react';

const Task60_CORS = () => {
  return (
    <div>
      <h2>Task 60: Secure API with CORS (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Cross-Origin Resource Sharing (CORS)</strong> is a security mechanism that browsers use to restrict web pages from making requests to a different domain (or "origin") than the one that served the page. This is a purely backend configuration, but it directly affects whether a React frontend can successfully call an API.
        </p>

        <h3>The Same-Origin Policy</h3>
        <p>
          By default, browsers enforce the "Same-Origin Policy". This means if your React app is served from <code>https://my-cool-app.com</code>, its JavaScript code is only allowed to make API calls to endpoints on that same domain (e.g., <code>https://my-cool-app.com/api/...</code>). A request to a different domain, like <code>https://api.another-service.com</code>, would be blocked by the browser.
        </p>

        <h3>How CORS Solves This</h3>
        <p>
          CORS is a way for a server to tell the browser that it's okay to accept requests from other origins. This is done through special HTTP headers sent by the backend API server.
        </p>
        <ul>
          <li>
            <strong><code>Access-Control-Allow-Origin</code></strong>: This is the most important header. The server uses it to specify which origins are allowed to access its resources.
            <ul>
              <li><code>Access-Control-Allow-Origin: *</code>: Allows any origin. This is insecure and should not be used in production.</li>
              <li><code>Access-Control-Allow-Origin: https://my-cool-app.com</code>: The secure way. This tells the browser that only requests from your specific React app's domain are allowed.</li>
            </ul>
          </li>
          <li>
            <strong><code>Access-Control-Allow-Methods</code></strong>: Specifies which HTTP methods are allowed (e.g., <code>GET, POST, PUT, DELETE</code>).
          </li>
          <li>
            <strong><code>Access-Control-Allow-Headers</code></strong>: Specifies which HTTP headers can be used in the request (e.g., <code>Content-Type, Authorization</code>).
          </li>
          <li>
            <strong>Preflight Requests (<code>OPTIONS</code>):</strong> For requests that are considered "non-simple" (e.g., those with methods other than GET/POST or with custom headers like <code>Authorization</code>), the browser first sends an <code>OPTIONS</code> request to the server. This "preflight" request asks for permission. The server must respond to the OPTIONS request with the correct CORS headers, and only if permission is granted will the browser send the actual API request (e.g., the <code>PUT</code> request).
          </li>
        </ul>

        <h3>Backend Implementation (Example with Node.js/Express)</h3>
        <pre><code>
{`const cors = require('cors');
const express = require('express');
const app = express();

const allowedOrigins = ['https://my-cool-app.com', 'http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions)); // Enable CORS with specific options

// ... your API routes
`}
        </code></pre>
      </div>
    </div>
  );
};

export default Task60_CORS;
