import React from 'react';

const Task66_PubSub = () => {
  return (
    <div>
      <h2>Task 66: Pub/Sub Architecture for Scaling WebSockets (Conceptual)</h2>
      <div className="description">
        <p>
          When you run a single WebSocket server instance, broadcasting messages is simple. But what happens when you need to scale your application horizontally by running multiple server instances behind a load balancer? A user connected to Server A won't receive messages broadcast by Server B. The Publish/Subscribe (Pub/Sub) pattern solves this problem.
        </p>

        <h3>How Pub/Sub Works with WebSockets</h3>
        <p>
          A message broker like <strong>Redis</strong> or <strong>Kafka</strong> is introduced to act as a central communication channel for all server instances.
        </p>
        <ol>
          <li>
            <strong>User Action:</strong> A user connected to <strong>Server A</strong> sends a chat message.
          </li>
          <li>
            <strong>Publish:</strong> Instead of immediately broadcasting the message to its own connected clients, Server A **publishes** the message to a specific channel (e.g., a 'chat' channel) in the message broker (e.g., Redis).
          </li>
          <li>
            <strong>Subscription:</strong> All server instances (Server A, Server B, Server C, etc.) are **subscribed** to this 'chat' channel in Redis.
          </li>
          <li>
            <strong>Receive and Broadcast:</strong> All subscribed servers, including the original Server A, receive the message from the Redis channel almost instantly.
          </li>
          <li>
            <strong>WebSocket Push:</strong> Upon receiving the message from the broker, each individual server instance (A, B, and C) then broadcasts the message to **its own set of connected WebSocket clients**.
          </li>
        </ol>

        <h3>Benefits of this Architecture</h3>
        <ul>
          <li><strong>Scalability:</strong> You can add or remove server instances as needed, and they will all stay in sync through the central message broker. A message sent by a user on any server will reach all users on all other servers.</li>
          <li><strong>Decoupling:</strong> The service that generates an event (e.g., an order processing service) doesn't need to know anything about the WebSocket servers. It just needs to publish an 'order_created' event to the message broker. The WebSocket servers can subscribe to this event and push notifications to clients, decoupling the two systems.</li>
          <li><strong>Resilience:</strong> If one WebSocket server instance crashes, the others remain operational and can continue serving their clients.</li>
        </ul>
        <p>
          This architecture is fundamental for building large-scale, real-time applications.
        </p>
      </div>
    </div>
  );
};

export default Task66_PubSub;
