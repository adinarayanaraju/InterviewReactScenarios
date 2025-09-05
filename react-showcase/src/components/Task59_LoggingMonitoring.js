import React from 'react';

const Task59_LoggingMonitoring = () => {
  return (
    <div>
      <h2>Task 59: Logging & Monitoring (Conceptual)</h2>
      <div className="description">
        <p>
          Logging and monitoring are essential for understanding how your application behaves in production, diagnosing issues, and tracking performance. This involves both backend and frontend instrumentation.
        </p>

        <h3>Backend Logging (e.g., with Winston)</h3>
        <p>
          The backend server is the primary source for logs. A structured logging library like <strong>Winston</strong> or <strong>Pino</strong> is crucial.
        </p>
        <ul>
          <li><strong>What to Log:</strong>
            <ul>
              <li>Incoming API requests (method, URL, status code, response time).</li>
              <li>Application errors with full stack traces.</li>
              <li>Key business events (e.g., user signed up, order placed).</li>
              <li>Database query performance.</li>
            </ul>
          </li>
          <li><strong>Structured Logs:</strong> Logs should be in a machine-readable format like JSON. This allows them to be easily ingested, searched, and visualized by log management services (e.g., Datadog, Logz.io, ELK Stack).
            <pre><code>{`{"level":"info", "message":"API request", "method":"GET", "url":"/api/products", "status":200, "duration_ms":52}`}</code></pre>
          </li>
        </ul>

        <h3>Frontend Monitoring (e.g., with Sentry)</h3>
        <p>
          The frontend also needs monitoring to catch client-side issues that never reach the server.
        </p>
        <ul>
          <li><strong>Error Boundaries:</strong> As shown in Task 10, an Error Boundary is a React component that catches JavaScript errors in its child component tree.
          </li>
          <li><strong>Integration with a Monitoring Service:</strong> Inside the <code>componentDidCatch</code> lifecycle method of your Error Boundary, you would integrate a service like <strong>Sentry</strong>, <strong>LogRocket</strong>, or <strong>Datadog RUM</strong>.
            <pre><code>
{`// Inside ErrorBoundary.js
import * as Sentry from "@sentry/react";

componentDidCatch(error, errorInfo) {
  // This will send the error report to Sentry
  Sentry.captureException(error, { extra: errorInfo });
}`}
            </code></pre>
          </li>
          <li><strong>What this captures:</strong>
            <ul>
              <li>Client-side JavaScript errors and their stack traces.</li>
              <li>The user's browser, OS, and device information.</li>
              <li>A "breadcrumb" trail of user actions leading up to the error.</li>
              <li>Network request failures.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Task59_LoggingMonitoring;
