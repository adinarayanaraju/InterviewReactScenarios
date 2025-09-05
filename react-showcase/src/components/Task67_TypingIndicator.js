import React from 'react';

const Task67_TypingIndicator = () => {
  return (
    <div>
      <h2>Task 67: Real-Time Typing Indicator (Conceptual)</h2>
      <div className="description">
        <p>
          A "user is typing..." indicator provides valuable real-time feedback in a chat application. It's implemented using WebSocket events, but requires careful handling to avoid flooding the network with messages.
        </p>

        <h3>Frontend Logic</h3>
        <ol>
          <li>
            <strong>Detect Typing:</strong> An event listener is attached to the chat input field (e.g., <code>onKeyDown</code>). When the user starts typing, the app emits a <code>'start_typing'</code> event to the WebSocket server.
          </li>
          <li>
            <strong>Debouncing/Throttling:</strong> You should not send an event on every single keystroke. This would create unnecessary network traffic. The <code>'start_typing'</code> event should be <strong>debounced</strong> or <strong>throttled</strong>. For example, you only send the event if the user has been continuously typing for 500ms, or you send it at most once every 2 seconds.
          </li>
          <li>
            <strong>Detect When Typing Stops:</strong> When the user stops typing, a <code>'stop_typing'</code> event needs to be sent. This is often handled with a debounced function. When the user types, you reset a timer. If the timer is allowed to finish (e.g., after 3 seconds of inactivity), the <code>'stop_typing'</code> event is emitted. Sending a message also immediately triggers the <code>'stop_typing'</code> event.
          </li>
          <li>
            <strong>Displaying the Indicator:</strong> The React app listens for <code>'user_is_typing'</code> and <code>'user_stopped_typing'</code> events from the server. It maintains a list in its state of which users are currently typing. It then renders a message like "User X and User Y are typing..." based on this state.
          </li>
        </ol>

        <h3>Backend Logic</h3>
        <ol>
          <li>
            <strong>Receive Events:</strong> The WebSocket server listens for <code>'start_typing'</code> and <code>'stop_typing'</code> events from each client.
          </li>
          <li>
            <strong>Track Typing Status:</strong> The server maintains a list of users who are currently typing.
          </li>
          <li>
            <strong>Broadcast to Others:</strong> When the server receives a <code>'start_typing'</code> event from User A, it broadcasts a <code>'user_is_typing'</code> event (with User A's name/ID) to all *other* users in the chat room. It does the same for <code>'stop_typing'</code>. It's important not to broadcast back to the original sender.
          </li>
          <li>
            <strong>Handle Disconnects:</strong> If a user who was typing disconnects, the server should automatically send a <code>'user_stopped_typing'</code> event for that user to everyone else.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Task67_TypingIndicator;
