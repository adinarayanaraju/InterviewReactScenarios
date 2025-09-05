import React from 'react';

const Task64_PresenceDetection = () => {
  return (
    <div>
      <h2>Task 64: Presence Detection (Conceptual)</h2>
      <div className="description">
        <p>
          Presence detection is the feature that allows you to see who is currently online in an application (e.g., the green dot next to a user's name in a chat app). This is managed by a WebSocket server that tracks active connections.
        </p>

        <h3>How it Works</h3>
        <ol>
          <li>
            <strong>User Connects:</strong>
            <ul>
              <li>When a user opens the React app, the client establishes a WebSocket connection with the server.</li>
              <li>During the connection handshake, the client sends authentication information (like a JWT) to identify the user.</li>
              <li>The server maintains a list or a set of currently connected user IDs. When the new user connects, their ID is added to this list.</li>
            </ul>
          </li>
          <li>
            <strong>Server Broadcasts Update:</strong>
            <ul>
              <li>After adding the new user, the server broadcasts an updated list of all online users to every connected client. This could be a <code>'presence_update'</code> event with a payload like <code>&#123; onlineUsers: ['user1', 'user2', 'user3'] &#125;</code>.</li>
              <li>Alternatively, to save bandwidth, it could just broadcast a <code>'user_joined'</code> event with the specific user's ID: <code>&#123; userId: 'user3' &#125;</code>.</li>
            </ul>
          </li>
          <li>
            <strong>Frontend Updates UI:</strong>
            <ul>
              <li>The React frontend listens for these presence events.</li>
              <li>When it receives an update, it stores the list of online user IDs in its state (e.g., in a Redux store or component state).</li>
              <li>A "User List" component can then render the list of all users, and conditionally display a green "online" dot next to the users whose IDs are in the "online" list from the state.</li>
            </ul>
          </li>
          <li>
            <strong>User Disconnects:</strong>
            <ul>
              <li>When a user closes their browser tab or loses their internet connection, the WebSocket connection is terminated.</li>
              <li>The server listens for this <code>'disconnect'</code> event.</li>
              <li>When a user disconnects, the server removes their ID from the list of online users and broadcasts a new <code>'presence_update'</code> or <code>'user_left'</code> event to all remaining clients.</li>
              <li>The frontend receives this event and updates its state accordingly, removing the green dot from the disconnected user.</li>
            </ul>
          </li>
        </ol>

        <h3>Scalability</h3>
        <p>
          For applications with many users and servers, tracking presence requires a more robust solution than a simple in-memory list on each server instance. A centralized store like <strong>Redis</strong> is often used. Each server instance would update the shared list of online users in Redis, ensuring all servers have a consistent view of who is online.
        </p>
      </div>
    </div>
  );
};

export default Task64_PresenceDetection;
