import React from 'react';

const Task56_Webhooks = () => {
  return (
    <div>
      <h2>Task 56: Webhook Handling (Conceptual)</h2>
      <div className="description">
        <p>
          Webhooks are a way for an external service (like Stripe, PayPal, or GitHub) to send your application real-time data or notifications about events that have occurred. Instead of your application constantly polling the service for changes, the service calls a specific URL on your backend—the webhook endpoint—when an event happens.
        </p>

        <h3>Example Flow: A Stripe Payment</h3>
        <ol>
          <li>
            <strong>Frontend Action:</strong> A user in your React app completes a Stripe checkout session. Stripe processes the payment.
          </li>
          <li>
            <strong>Stripe Event:</strong> After the payment succeeds, Stripe creates an event (e.g., <code>checkout.session.completed</code>).
          </li>
          <li>
            <strong>Webhook Notification:</strong> Stripe sends a <code>POST</code> request containing the event data to a pre-configured webhook endpoint on your backend server (e.g., <code>https://yourapi.com/webhooks/stripe</code>).
          </li>
          <li>
            <strong>Backend Webhook Handler:</strong> Your backend server receives the request. It's crucial to:
              <ul>
                <li><strong>Verify the Signature:</strong> Stripe includes a unique signature in the request headers. Your backend must verify this signature using a secret key to ensure the request is genuinely from Stripe and not a malicious actor.</li>
                <li><strong>Process the Event:</strong> The backend parses the event data. For a successful payment, it might update the order status in your database from 'pending' to 'paid', grant the user access to a service, or trigger an email receipt.</li>
                <li><strong>Return a 200 OK Response:</strong> Your backend must immediately send a <code>200 OK</code> response back to Stripe to acknowledge receipt of the webhook. If Stripe doesn't receive a 200, it will assume the delivery failed and will retry sending the webhook.</li>
              </ul>
          </li>
          <li>
            <strong>Updating the Frontend:</strong> The frontend does not get updated directly by the webhook. After the backend has processed the webhook and updated the database, the frontend can learn about the change in a few ways:
              <ul>
                <li><strong>Polling:</strong> The React app can poll a status endpoint (e.g., <code>GET /api/orders/123/status</code>) until the status changes to 'paid'.</li>
                <li><strong>WebSockets:</strong> The backend can push a real-time notification to the connected React client via WebSockets (see Task 62).</li>
                <li><strong>Manual Refresh:</strong> The user can be prompted to refresh the page or navigate to a success page where the new status is fetched.</li>
              </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Task56_Webhooks;
