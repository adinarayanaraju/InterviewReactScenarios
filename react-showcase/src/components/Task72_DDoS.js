import React from 'react';

const Task72_DDoS = () => {
  return (
    <div>
      <h2>Task 72: DDoS Protection (Conceptual)</h2>
      <div className="description">
        <p>
          A <strong>Distributed Denial-of-Service (DDoS)</strong> attack is a malicious attempt to disrupt the normal traffic of a server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic. Protection against DDoS attacks happens almost entirely at the infrastructure and backend levels, not within the React application itself.
        </p>

        <h3>Layers of DDoS Protection</h3>
        <ol>
          <li>
            <strong>CDN and WAF (First Line of Defense):</strong>
            <ul>
              <li><strong>Content Delivery Network (CDN):</strong> Services like <strong>Cloudflare</strong>, <strong>AWS CloudFront</strong>, or <strong>Akamai</strong> are the frontline defense. They have massive global networks that can absorb and filter huge amounts of traffic. They cache your static assets (like your React app's JS/CSS files) and serve them from edge locations, reducing the load on your origin server.</li>
              <li><strong>Web Application Firewall (WAF):</strong> A WAF is often integrated with a CDN. It inspects incoming HTTP traffic and filters out malicious requests based on a set of rules. It can block traffic from known malicious IP addresses, bots, and common attack patterns before they ever reach your application server.</li>
            </ul>
          </li>
          <li>
            <strong>Load Balancers:</strong>
            <ul>
              <li>A load balancer distributes incoming traffic across multiple backend server instances. This prevents any single server from being overwhelmed. While not a direct DDoS mitigation tool, it's a core part of a resilient architecture that can better withstand traffic spikes.</li>
            </ul>
          </li>
          <li>
            <strong>API Rate Limiting (Application Layer):</strong>
            <ul>
              <li>As discussed in Task 54, implementing rate limiting on your backend API is crucial. It prevents a single user or IP address from making an excessive number of requests in a given period. This can help mitigate smaller, application-layer DDoS attacks that are designed to exhaust server resources (CPU, memory) rather than just network bandwidth.</li>
            </ul>
          </li>
          <li>
            <strong>Cloud Provider Protections:</strong>
            <ul>
              <li>Major cloud providers like AWS, Google Cloud, and Azure have their own built-in DDoS protection services (e.g., AWS Shield). These services monitor network flow and can automatically detect and mitigate large-scale DDoS attacks at the network level.</li>
            </ul>
          </li>
        </ol>

        <h3>What is the React App's Role?</h3>
        <p>
          The React app itself does very little to prevent a DDoS attack. Its main responsibility is to handle API errors gracefully. If the backend API becomes unavailable due to an attack, the React app should display a user-friendly error message rather than crashing or showing a blank page.
        </p>
      </div>
    </div>
  );
};

export default Task72_DDoS;
