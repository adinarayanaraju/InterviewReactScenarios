import React from 'react';

const Task84_AdminDashboard = () => {
  return (
    <div>
      <h2>Task 84: Admin Dashboard with Role Control (Conceptual)</h2>
      <div className="description">
        <p>
          An admin dashboard is a protected area of an application that provides authorized users (admins) with tools to manage the application, its data, and its users. This is a full-stack feature combining frontend routing, UI controls, and backend authorization.
        </p>

        <h3>Frontend Implementation:</h3>
        <ul>
          <li>
            <strong>Protected Routes:</strong> The entire dashboard should be behind a protected route. The router checks if a user is logged in and if their role is 'admin' (see Task 43). If not, the user is redirected, typically to the login page or a "403 Forbidden" page.
            <pre><code>
{`<Route path="/admin" element={
  <ProtectedRoute requiredRole="admin">
    <AdminLayout />
  </ProtectedRoute>
} />`}
            </code></pre>
          </li>
          <li>
            <strong>Conditional UI:</strong> Within the dashboard, different UI elements and navigation links can be shown based on more granular permissions. For example, a "Super Admin" might see a "Billing" section that a regular "Content Manager" admin does not.
          </li>
          <li>
            <strong>Data Management UI (CRUD):</strong> The core of the dashboard is often a set of views for performing CRUD (Create, Read, Update, Delete) operations on application data (e.g., managing users, products, or orders). This involves building forms for creating/editing and tables/lists for displaying data, with buttons that call the corresponding backend API endpoints.
          </li>
          <li>
            <strong>Analytics and Charts:</strong> The dashboard often includes data visualizations (see Task 63) to show key metrics about the application's health and usage.
          </li>
        </ul>

        <h3>Backend Implementation:</h3>
        <ul>
          <li>
            <strong>Authorization Middleware:</strong> Every single API endpoint for the admin dashboard (e.g., <code>/api/admin/users</code>, <code>/api/admin/products/:id</code>) must be protected by a backend middleware.
          </li>
          <li>
            <strong>Token Verification:</strong> This middleware first validates the user's JWT to ensure they are authenticated.
          </li>
          <li>
            <strong>Role/Permission Check:</strong> It then checks the payload of the JWT to ensure the user has the required role ('admin') or specific permissions to access that endpoint. If the check fails, the backend returns a <code>403 Forbidden</code> error, even if the user is logged in. This is crucial, as it prevents a regular user from accessing admin APIs directly, even if the UI was somehow visible to them.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Task84_AdminDashboard;
