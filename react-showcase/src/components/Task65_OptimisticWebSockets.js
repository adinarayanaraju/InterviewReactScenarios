import React from 'react';

const Task65_OptimisticWebSockets = () => {
  return (
    <div>
      <h2>Task 65: Optimistic WebSocket Updates (Conceptual)</h2>
      <div className="description">
        <p>
          Similar to optimistic updates for API mutations (Task 24), this pattern can be applied to real-time interactions to make a UI feel instantaneous. When a user performs an action, the UI is updated immediately, assuming the server will accept the action.
        </p>

        <h3>Example Flow: Sending a Chat Message</h3>
        <ol>
          <li>
            <strong>User Action:</strong> The user types "Hello!" and hits "Send".
          </li>
          <li>
            <strong>Optimistic UI Update (Frontend):</strong>
            <ul>
              <li>The instant the user clicks "Send", the frontend does two things simultaneously:
                <ol>
                  <li>It emits the <code>'send_message'</code> event to the WebSocket server with the message data.</li>
                  <li>It **immediately** adds the new message to its local state (e.g., the array of messages). It might render this optimistic message in a slightly different style (e.g., greyed out) to indicate it's "pending".</li>
                </ol>
              </li>
              <li>The user sees their message appear in the chat window instantly.</li>
            </ul>
          </li>
          <li>
            <strong>Server Processing:</strong>
            <ul>
              <li>The WebSocket server receives the <code>'send_message'</code> event. It might perform validation (e.g., check for spam, validate the user's permissions).</li>
              <li>After processing, it broadcasts the confirmed message back to all clients (including the original sender). This confirmed message might have additional data, like a permanent ID from the database and a server timestamp.</li>
            </ul>
          </li>
          <li>
            <strong>Reconciliation (Frontend):</strong>
            <ul>
              <li>The original sender's client receives the broadcasted message from the server.</li>
              <li>It can now find the "pending" message in its local state (e.g., by using a temporary ID it generated) and replace it with the confirmed message from the server.</li>
              <li>The UI updates, perhaps by changing the message from grey to its normal color, indicating it has been successfully delivered.</li>
            </ul>
          </li>
          <li>
            <strong>Handling Rejection (Rollback):</strong>
            <ul>
              <li>What if the server rejects the message? The server would not broadcast the message. Instead, it could send a specific <code>'message_rejected'</code> event back to only the original sender.</li>
              <li>The client would listen for this rejection event. Upon receiving it, it would find and remove the optimistic message from its local state, and possibly display an error message to the user ("Your message could not be sent."). This is the "rollback".</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Task65_OptimisticWebSockets;
