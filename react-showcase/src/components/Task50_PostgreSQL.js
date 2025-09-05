import React from 'react';

const Task50_PostgreSQL = () => {
  return (
    <div>
      <h2>Task 50: Database Integration - PostgreSQL (Conceptual)</h2>
      <div className="description">
        <p>
          PostgreSQL (often called Postgres) is a powerful, open-source object-relational database system known for its reliability, feature robustness, and performance. Like with MongoDB, integrating it with React requires a backend server.
        </p>

        <h3>Typical Architecture with an ORM:</h3>
        <p>
          <strong>React Frontend &harr; Node.js/Express Backend &harr; ORM (Prisma/TypeORM) &harr; PostgreSQL Database</strong>
        </p>
        <ol>
          <li>
            <strong>Frontend Request:</strong> The React app makes an API call, for example, to fetch a list of products with sorting: <code>GET /api/products?sort=price&order=desc</code>.
          </li>
          <li>
            <strong>Backend Logic:</strong> The Node.js/Express server receives the request. It uses an Object-Relational Mapper (ORM) like <strong>Prisma</strong> or <strong>TypeORM</strong> to interact with the database.
          </li>
          <li>
            <strong>ORM Query:</strong> An ORM allows you to write queries using familiar JavaScript/TypeScript objects and methods instead of raw SQL. The backend logic would translate the API request into an ORM query, for example:
            <pre><code>
{`// Example using Prisma
const products = await prisma.product.findMany({
  orderBy: {
    price: 'desc',
  },
});`}
            </code></pre>
          </li>
          <li>
            <strong>SQL Generation:</strong> The ORM takes this code and generates an optimized, safe SQL query (e.g., <code>SELECT * FROM "Product" ORDER BY "price" DESC;</code>) which it sends to the PostgreSQL database.
          </li>
          <li>
            <strong>Database Response:</strong> PostgreSQL executes the query and returns the rows of data to the ORM.
          </li>
          <li>
            <strong>API Response:</strong> The ORM maps the SQL rows back into JavaScript objects, which the backend then sends to the React frontend as a JSON response.
          </li>
        </ol>

        <h3>Why Use an ORM?</h3>
        <ul>
          <li><strong>Productivity:</strong> Write queries faster and more easily in your preferred language.</li>
          <li><strong>Type Safety:</strong> ORMs like Prisma and TypeORM provide strong type safety, catching errors at build time rather than runtime.</li>
          <li><strong>Security:</strong> They help prevent common vulnerabilities like SQL injection by automatically sanitizing inputs.</li>
          <li><strong>Database Agnostic:</strong> An ORM can make it easier to switch between different SQL databases (e.g., from PostgreSQL to MySQL) with minimal code changes.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task50_PostgreSQL;
