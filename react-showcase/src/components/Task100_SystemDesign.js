import React from 'react';

const Task100_SystemDesign = () => {
  return (
    <div>
      <h2>Task 100: Full System Design - Gaming Marketplace (Conceptual)</h2>
      <div className="description">
        <p>
          This final task brings together many of the previous concepts into a high-level system design for a modern, scalable web application: a Gaming Marketplace.
        </p>

        <h3>Core Components & Architecture</h3>

        <h4>1. Frontend (React with a Framework)</h4>
        <ul>
          <li><strong>Framework:</strong> <strong>Next.js</strong> would be an ideal choice.
            <ul>
              <li><strong>SSG (Static Site Generation):</strong> For marketing pages, individual game detail pages, and blog posts to ensure fast loads and excellent SEO (Task 87).</li>
              <li><strong>SSR (Server-Side Rendering):</strong> For user-specific pages like "My Library" or the account dashboard, which need to be SEO-friendly but also personalized (Task 86).</li>
              <li><strong>Client-Side Rendering:</strong> For highly interactive parts of the site, like the checkout flow or settings pages.</li>
            </ul>
          </li>
          <li><strong>State Management:</strong>
            <ul>
              <li><strong>React Query / SWR:</strong> For managing all server state (fetching game lists, user profiles, etc.).</li>
              <li><strong>Zustand / Redux:</strong> For global client state like the shopping cart and user authentication status.</li>
            </ul>
          </li>
        </ul>

        <h4>2. Backend (Microservices & BFF)</h4>
        <ul>
          <li><strong>BFF (Backend for Frontend):</strong> A dedicated Node.js/GraphQL server that the Next.js frontend communicates with (Task 88). It aggregates data from the downstream microservices.
            <ul>
              <li><strong>GraphQL:</strong> A perfect fit for a BFF, allowing the frontend to request exactly the data it needs for complex views (Task 47).</li>
            </ul>
          </li>
          <li><strong>Microservices:</strong> Independent backend services, each with its own database and responsibilities.
            <ul>
              <li><strong>Accounts Service:</strong> Manages user registration, login, profiles, and secure password storage (Task 53). Issues JWTs (Task 42).</li>
              <li><strong>Catalog Service:</strong> Manages the list of games, descriptions, prices, and metadata.</li>
              <li><strong>Orders Service:</strong> Handles the checkout process, payment integration (Task 82), and order history.</li>
              <li><strong>Inventory Service:</strong> Manages the inventory of game keys or licenses.</li>
            </ul>
          </li>
        </ul>

        <h4>3. Data & Infrastructure</h4>
        <ul>
          <li><strong>Databases:</strong> A mix of databases could be used. A relational database like <strong>PostgreSQL</strong> for the Orders and Inventory services where data integrity is critical, and a document database like <strong>MongoDB</strong> for the Catalog service (Tasks 49, 50).</li>
          <li><strong>Caching:</strong> A distributed <strong>Redis</strong> cache for sessions, database query results, and rate limiting (Tasks 55, 92).</li>
          <li><strong>Deployment & CI/CD:</strong> The entire system would be containerized with <strong>Docker</strong> and deployed to <strong>Kubernetes</strong> for scalability and resilience (Task 90). A <strong>GitHub Actions</strong> pipeline would automate testing and deployment (Task 89).</li>
          <li><strong>CDN:</strong> A CDN like Cloudflare would serve all static assets, cached API responses, and provide DDoS protection (Tasks 72, 92).</li>
        </ul>

        <h4>4. Advanced Features</h4>
        <ul>
          <li><strong>AI Sales Prediction:</strong> A separate Python/ML service could analyze historical sales data to provide recommendations, which would be exposed via an internal API to the BFF (Task 97).</li>
          <li><strong>Blockchain for Transparency:</strong> For specific high-value items or to prove ownership, transactions could optionally be recorded on a blockchain. The frontend would integrate with a wallet like MetaMask for these specific actions (Task 98).</li>
        </ul>
      </div>
    </div>
  );
};

export default Task100_SystemDesign;
