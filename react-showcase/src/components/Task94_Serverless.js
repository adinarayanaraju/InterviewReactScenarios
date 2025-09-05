import React from 'react';

const Task94_Serverless = () => {
  return (
    <div>
      <h2>Task 94: Serverless Architecture (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Serverless architecture</strong> doesn't mean there are no servers. It means you, the developer, don't have to manage them. Instead of provisioning and managing traditional backend servers that run 24/7, you deploy your code as individual functions to a cloud provider (like AWS Lambda, Google Cloud Functions, or Azure Functions).
        </p>

        <h3>How it Works with a React App</h3>
        <p>
          The architecture often uses an "API Gateway" to expose the serverless functions as HTTP endpoints.
        </p>
        <ol>
          <li>
            <strong>Frontend Request:</strong> The React app makes a standard API call to an endpoint, e.g., <code>POST /api/users</code>.
          </li>
          <li>
            <strong>API Gateway:</strong> An <strong>API Gateway</strong> (like Amazon API Gateway) receives this request. Its job is to act as the front door to your backend logic. It is configured to route requests for a specific path and method (e.g., <code>POST /users</code>) to a corresponding serverless function.
          </li>
          <li>
            <strong>Function Execution (e.g., AWS Lambda):</strong>
            <ul>
              <li>The cloud provider receives the trigger from the API Gateway and "wakes up" your function. If the function hasn't been used recently, this might involve a "cold start", which adds a small amount of latency.</li>
              <li>The function, which is just a piece of code (e.g., a Node.js function), runs and performs its specific task (e.g., validates the user data, saves it to a database like DynamoDB).</li>
              <li>The function then returns a response.</li>
            </ul>
          </li>
          <li>
            <strong>API Gateway Response:</strong> The API Gateway takes the function's return value, formats it as an HTTP response, and sends it back to the React frontend.
          </li>
          <li>
            <strong>Function Shuts Down:</strong> After execution, the serverless function shuts down. You are only billed for the exact milliseconds it was running.
          </li>
        </ol>

        <h3>Benefits of Serverless</h3>
        <ul>
          <li><strong>Pay-per-Use:</strong> You are not paying for idle server time. If your API has no traffic, your cost is zero. This can be extremely cost-effective.</li>
          <li><strong>Automatic Scaling:</strong> If your API gets a sudden spike of 10,000 requests, the cloud provider will automatically run 10,000 parallel instances of your function to handle the load. You don't need to configure any autoscaling rules.</li>
          <li><strong>Reduced Operational Overhead:</strong> You don't have to worry about server maintenance, security patches, or operating system updates.</li>
        </ul>
        <h3>Drawbacks</h3>
        <ul>
          <li><strong>Cold Starts:</strong> The latency for the first request to an "idle" function can be higher than with a traditional, always-on server.</li>
          <li><strong>Complexity:</strong> Managing many small, independent functions and their interactions can become complex (often leading to a "serverless monolith" of interconnected functions).</li>
          <li><strong>State Management:</strong> Functions are typically stateless, so any state must be managed in an external database or cache.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task94_Serverless;
