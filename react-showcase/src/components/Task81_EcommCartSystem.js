import React from 'react';

const Task81_EcommCartSystem = () => {
  return (
    <div>
      <h2>Task 81: E-commerce Cart System (Conceptual)</h2>
      <div className="description">
        <p>A complete e-commerce cart system is a full-stack feature involving the frontend, backend, and a database to ensure the cart persists for logged-in users.</p>

        <h3>Frontend Components & State:</h3>
        <ul>
          <li><strong>Global State:</strong> A global state manager (like Redux or Zustand) is ideal for holding the cart's contents (an array of items with quantities). This allows any component in the app to access the cart.</li>
          <li><strong>Local Storage Sync:</strong> For guest users, the cart state should be synchronized with <code>localStorage</code> so it persists between page loads. For logged-in users, the state should be hydrated from the backend.</li>
          <li><strong>UI Components:</strong>
            <ul>
              <li>Product components with "Add to Cart" buttons that dispatch actions.</li>
              <li>A cart icon in the header showing the item count.</li>
              <li>A detailed cart page or drawer to view items, change quantities, and remove items.</li>
            </ul>
          </li>
        </ul>

        <h3>Backend API Endpoints:</h3>
        <ul>
          <li><strong><code>GET /api/cart</code></strong>: For a logged-in user, retrieves their saved cart from the database.</li>
          <li><strong><code>POST /api/cart/items</code></strong>: Adds a new item to the user's cart. The request body would contain <code>{ productId: '...', quantity: 1 }</code>.</li>
          <li><strong><code>PUT /api/cart/items/:itemId</code></strong>: Updates the quantity of an existing item in the cart.</li>
          <li><strong><code>DELETE /api/cart/items/:itemId</code></strong>: Removes an item from the cart.</li>
          <li><strong><code>POST /api/cart/sync</code></strong>: An endpoint to synchronize a guest's localStorage cart with their database cart upon logging in.</li>
        </ul>

        <h3>Database Schema:</h3>
        <p>In the database, you'd likely have a <code>carts</code> table and a <code>cart_items</code> table.</p>
        <ul>
          <li><code>carts</code>: Would have a <code>userId</code> to link it to a user.</li>
          <li><code>cart_items</code>: Would have a <code>cartId</code>, <code>productId</code>, and <code>quantity</code>.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task81_EcommCartSystem;
