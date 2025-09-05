import React from 'react';

const Task62_RealTimeNotifications = () => {
  return (
    <div>
      <h2>Task 62: Real-Time Notifications (Conceptual)</h2>
      <div className="description">
        <p>
          Real-time notifications inform users about important events as they happen, without requiring a page refresh. This is typically achieved with WebSockets or Server-Sent Events (SSE).
        </p>

        <h3>Example Flow: New Order Notification</h3>
        <ol>
          <li>
            <strong>Event Trigger:</strong> A user completes a purchase. The backend processes the order and saves it to the database. This is the trigger event.
          </li>
          <li>
            <strong>Backend Push Notification:</strong> After successfully processing the order, the backend needs to notify the relevant client(s) (e.g., an admin dashboard). It uses an established WebSocket connection to send a notification event.
            <ul>
              <li>The server might send a message on a specific "channel" or "room". For example, it could push a <code>'new_order'</code> event to an 'admins' room.</li>
              <li>The payload would contain the relevant data, like <code>&#123; orderId: 'xyz', amount: 99.99, customerName: 'John Doe' &#125;</code>.</li>
            </ul>
          </li>
          <li>
            <strong>Frontend Receives Notification:</strong>
            <ul>
              <li>A component in the React app (e.g., a global <code>NotificationProvider</code> wrapped around the app) is constantly listening for the <code>'new_order'</code> event on its WebSocket connection.</li>
              <li>When the event is received, the frontend can take several actions.</li>
            </ul>
          </li>
          <li>
            <strong>Displaying the Notification:</strong>
            <ul>
              <li><strong>Toast/Snackbar:</strong> A common approach is to display a non-intrusive "toast" message at the corner of the screen. This can be managed with a library like <code>react-hot-toast</code> or <code>notistack</code>.</li>
              <li><strong>Updating State:</strong> The notification data can be added to a global state management store (like Redux or Zustand). This allows a notification center/panel to display a list of recent, unread notifications.</li>
              <li><strong>Updating UI in Real-Time:</strong> The data can be used to update a relevant part of the UI directly. For instance, if the admin is looking at a list of orders, the new order could be instantly prepended to the list without a manual refresh.</li>
            </ul>
          </li>
        </ol>

        <h3>Key Considerations</h3>
        <ul>
          <li><strong>Authentication:</strong> The WebSocket connection must be authenticated to ensure that notifications are only sent to the correct, authorized users. This is often done by passing a JWT along with the initial connection request.</li>
          <li><strong>Scalability:</strong> For large-scale applications, a publish/subscribe (Pub/Sub) system like Redis or Kafka is often used on the backend to manage and distribute real-time messages across multiple server instances (see Task 66).</li>
        </ul>
      </div>
    </div>
  );
};

export default Task62_RealTimeNotifications;
