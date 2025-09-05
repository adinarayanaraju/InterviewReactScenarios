import React from 'react';

const Task57_EnvConfig = () => {
  // In a Create React App project, environment variables are embedded at build time.
  // The value for REACT_APP_API_BASE_URL would be read from the corresponding .env file.
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api (default)';

  return (
    <div>
      <h2>Task 57: Environment-Specific Configuration (Conceptual)</h2>
      <div className="description">
        <p>
          Your application needs to behave differently depending on whether it's running in a development, staging, or production environment. For example, the API base URL will be different for each. Storing this configuration directly in the code is inflexible and insecure. Environment variables are the standard solution.
        </p>

        <h3>How it Works with Create React App</h3>
        <p>
          Create React App has built-in support for environment variables using <code>.env</code> files.
        </p>
        <ol>
          <li>
            <strong>Create <code>.env</code> files:</strong> In the root of your project, you can create files like:
            <ul>
              <li><code>.env</code>: Default values.</li>
              <li><code>.env.development</code>: Values used when running <code>npm start</code>.</li>
              <li><code>.env.production</code>: Values used when running <code>npm run build</code>.</li>
            </ul>
          </li>
          <li>
            <strong>Define Variables:</strong> Inside these files, you define your variables. <strong>For Create React App, they must be prefixed with <code>REACT_APP_</code>.</strong>
            <pre><code>
{`# .env.development
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_GTM_ID=GTM-DEV123`}
            </code></pre>
            <pre><code>
{`# .env.production
REACT_APP_API_BASE_URL=https://api.yourdomain.com
REACT_APP_GTM_ID=GTM-PROD456`}
            </code></pre>
          </li>
          <li>
            <strong>Access in Code:</strong> You can then access these variables in your JavaScript code using <code>process.env.REACT_APP_VARIABLE_NAME</code>.
          </li>
        </ol>

        <h3>Important Security Note</h3>
        <p>
          These environment variables are embedded into the HTML/JS/CSS bundle at <strong>build time</strong>. This means they are publicly accessible in the user's browser. <strong>Never store any secrets (API keys, tokens, passwords) in your React app's environment variables.</strong> They are only for non-sensitive, public configuration. Secrets must be kept on the backend server.
        </p>

        <h4>Current Value in this Environment:</h4>
        <p><code>REACT_APP_API_BASE_URL</code> = <strong>{apiBaseUrl}</strong></p>
      </div>
    </div>
  );
};

export default Task57_EnvConfig;
