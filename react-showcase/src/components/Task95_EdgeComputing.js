import React from 'react';

const Task95_EdgeComputing = () => {
  return (
    <div>
      <h2>Task 95: Edge Computing (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Edge Computing</strong> is a distributed computing paradigm that brings computation and data storage closer to the sources of data. In the context of web development, this means running server-side code not in a centralized data center, but in the hundreds of Points of Presence (PoPs) that make up a Content Delivery Network (CDN).
        </p>
        <p>
          Providers like <strong>Cloudflare Workers</strong>, <strong>Vercel Edge Functions</strong>, and <strong>AWS Lambda@Edge</strong> offer this capability.
        </p>

        <h3>How Edge Functions Work</h3>
        <ol>
          <li>
            <strong>User Request:</strong> A user in London makes a request to your website.
          </li>
          <li>
            <strong>CDN Interception:</strong> The request is routed to the nearest CDN edge location, in this case, a data center in London.
          </li>
          <li>
            <strong>Edge Function Execution:</strong> Instead of just serving a cached file, the edge location runs a small, fast JavaScript function (your "edge function"). This function has access to the user's request.
          </li>
          <li>
            <strong>Logic at the Edge:</strong> This function can perform logic *before* the request even reaches your origin server. Examples include:
            <ul>
              <li><strong>A/B Testing:</strong> Modifying the request to serve different versions of a page based on a cookie.</li>
              <li><strong>Authentication:</strong> Validating a JWT from the request headers. If it's invalid, the edge function can redirect to a login page immediately, without ever hitting your main backend.</li>
              <li><strong>Geographic Personalization:</strong> Modifying the HTML response to show content relevant to the user's location (e.g., currency, language).</li>
              <li><strong>Rendering HTML:</strong> The edge function can even fetch data from a database or API and perform Server-Side Rendering (SSR) of a React page directly at the edge, providing extremely low latency for dynamic content.</li>
            </ul>
          </li>
          <li>
            <strong>Response to User:</strong> The edge function generates a response and sends it directly back to the user from the London data center. The round-trip is very short, resulting in a very fast response time.
          </li>
        </ol>

        <h3>Edge vs. Serverless</h3>
        <ul>
          <li><strong>Location:</strong> Serverless functions (like AWS Lambda) run in a centralized region (e.g., us-east-1). Edge functions run in hundreds of locations globally.</li>
          <li><strong>Latency:</strong> Edge functions have much lower latency for users because the code runs physically closer to them.</li>
          <li><strong>Use Case:</strong> Edge functions are ideal for latency-sensitive tasks and logic that needs to run on every request, like personalization, authentication, and routing. Standard serverless is better for heavier, asynchronous backend tasks.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task95_EdgeComputing;
