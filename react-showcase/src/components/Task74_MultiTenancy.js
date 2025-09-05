import React from 'react';

const Task74_MultiTenancy = () => {
  return (
    <div>
      <h2>Task 74: Multi-Tenancy Support (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Multi-tenancy</strong> is a software architecture where a single instance of an application serves multiple customers (or "tenants"). Each tenant's data is isolated and remains invisible to other tenants. This is a common pattern for SaaS (Software-as-a-Service) applications. The implementation is primarily a backend and database architecture concern.
        </p>

        <h3>Backend and Database Strategy</h3>
        <p>
          The core challenge is data isolation. There are three main approaches:
        </p>
        <ol>
          <li>
            <strong>Separate Databases (Most Isolation, Most Expensive):</strong> Each tenant has their own physically separate database. This offers the strongest isolation but is the most complex and costly to manage and scale.
          </li>
          <li>
            <strong>Shared Database, Separate Schemas:</strong> All tenants share a single database, but each tenant has their own set of tables within a dedicated schema (e.g., <code>tenant_a.products</code>, <code>tenant_b.products</code>). This offers good isolation with lower overhead than separate databases.
          </li>
          <li>
            <strong>Shared Database, Shared Schema (Most Common):</strong> All tenants share the same database and the same tables. A mandatory <code>tenantId</code> column is added to every relevant table (e.g., <code>products</code>, <code>orders</code>, etc.). Every single database query on the backend <strong>must</strong> include a <code>WHERE tenantId = '...'</code> clause to ensure it only accesses data belonging to the current tenant. This is the most common, cost-effective, and scalable approach, but requires strict discipline in backend development to prevent data leaks.
          </li>
        </ol>

        <h3>Frontend Role and Implementation</h3>
        <p>
          The frontend's role is relatively simple but important. It needs to be aware of the current user's tenancy and ensure this context is provided to the backend with every API call.
        </p>
        <ul>
          <li>
            <strong>Identifying the Tenant:</strong> When a user logs in, the JWT issued by the backend should contain the user's <code>tenantId</code> as part of its payload.
            <pre><code>{`// Example JWT Payload
{
  "userId": "usr_123",
  "tenantId": "org_abc",
  "role": "admin",
  "exp": 167...
}`}</code></pre>
          </li>
          <li>
            <strong>Storing Tenant Context:</strong> The <code>tenantId</code> can be stored in the frontend's global state (e.g., Redux or Zustand) along with other user information.
          </li>
          <li>
            <strong>Sending Tenant Context:</strong> For every API call, the frontend can send the tenant ID to the backend. There are two common patterns:
              <ul>
                <li><strong>Via URL:</strong> API endpoints can be structured to include the tenant ID, e.g., <code>/api/tenants/org_abc/products</code>.</li>
                <li><strong>Via Custom Header:</strong> A custom HTTP header like <code>X-Tenant-ID: org_abc</code> can be sent with each request. This can be automated using an Axios or fetch interceptor.</li>
              </ul>
          </li>
        </ul>
        <p>
          The backend then uses this <code>tenantId</code> from the URL or header to apply the necessary <code>WHERE</code> clause to all its database queries, ensuring data is properly scoped to the correct tenant.
        </p>
      </div>
    </div>
  );
};

export default Task74_MultiTenancy;
