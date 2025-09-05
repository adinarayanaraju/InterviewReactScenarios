import React from 'react';

const Task82_CheckoutFlow = () => {
  return (
    <div>
      <h2>Task 82: Checkout Flow with Payments (Conceptual)</h2>
      <div className="description">
        <p>
          A secure checkout flow that handles payments is a critical, multi-step process that heavily relies on the backend and a third-party payment provider like <strong>Stripe</strong> or <strong>PayPal</strong> to avoid handling sensitive credit card data directly.
        </p>

        <h3>Secure Payment Flow with Stripe</h3>
        <ol>
          <li>
            <strong>Start Checkout (Frontend):</strong> The user reviews their cart and clicks "Proceed to Checkout". The React app sends the cart contents to the backend.
          </li>
          <li>
            <strong>Create Payment Intent (Backend):</strong> The backend receives the cart data, calculates the final amount (including taxes, shipping, etc.), and makes an API call to Stripe to create a "Payment Intent". This signals the intent to collect a payment. Stripe responds with a unique <code>client_secret</code> for this specific transaction.
          </li>
          <li>
            <strong>Render Payment Form (Frontend):</strong> The backend sends the <code>client_secret</code> back to the React app. The app then uses Stripe's official React library (<code>@stripe/react-stripe-js</code>) to render the secure payment form elements (Card number, CVC, Expiry). The <code>client_secret</code> is passed to this component. <strong>Crucially, your React app never sees or touches the raw credit card numbers.</strong>
          </li>
          <li>
            <strong>Confirm Payment (Frontend):</strong> The user fills out the form and clicks "Pay". The frontend calls a Stripe.js function (e.g., <code>stripe.confirmCardPayment()</code>), passing the <code>client_secret</code> and payment details. Stripe.js securely sends the payment information directly to Stripe's servers.
          </li>
          <li>
            <strong>Payment Processing (Stripe):</strong> Stripe processes the payment with the bank.
          </li>
          <li>
            <strong>Webhook Notification (Backend):</strong> Once the payment is confirmed, Stripe sends a <code>payment_intent.succeeded</code> event to your backend's pre-configured webhook endpoint (see Task 56). This is the definitive source of truth that the payment was successful.
          </li>
          <li>
            <strong>Fulfill Order (Backend):</strong> Upon receiving the successful payment webhook, the backend finalizes the order in the database (e.g., marks it as 'paid'), sends a confirmation email, and begins the fulfillment process.
          </li>
          <li>
            <strong>Show Confirmation (Frontend):</strong> The frontend can either poll for the order status or be updated via WebSockets to show the user a "Thank You" or "Order Confirmed" page.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Task82_CheckoutFlow;
