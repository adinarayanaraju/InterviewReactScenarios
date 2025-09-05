import React from 'react';

const Task61_WebSocketsChat = () => {
  return (
    <div>
      <h2>Task 61: WebSockets Chat App (Conceptual)</h2>
      <div className="description">
        <p>
          WebSockets provide a persistent, two-way communication channel between a client and a server. Unlike traditional HTTP requests which are client-initiated, a WebSocket connection allows the server to push data to the client at any time, making it perfect for real-time applications like chat.
        </p>

        <h3>Architecture Overview</h3>
        <ol>
          <li>
            <strong>WebSocket Server (e.g., with Socket.IO):</strong>
            <ul>
              <li>You need a dedicated WebSocket server. A popular Node.js library for this is <strong>Socket.IO</strong>, which provides helpful features like automatic reconnection and fallback to HTTP long-polling if WebSockets aren't supported.</li>
              <li>The server listens for incoming connections. When a client connects, the server keeps that connection open.</li>
              <li>The server listens for specific events (e.g., <code>'new message'</code>) from clients.</li>
              <li>When it receives a <code>'new message'</code> event from one client, it broadcasts that message to all other connected clients.</li>
            </ul>
          </li>
          <li>
            <strong>React Frontend (Client):</strong>
            <ul>
              <li>The React app uses a client library (e.g., <code>socket.io-client</code>) to establish a connection to the WebSocket server. This is typically done in a <code>useEffect</code> hook.</li>
              <li>The component has an input field for the user to type a message. When the user sends a message, the component uses the socket to <strong>emit</strong> a <code>'new message'</code> event to the server, along with the message content.</li>
              <li>The component also sets up an event listener to <strong>listen</strong> for <code>'new message'</code> events coming *from* the server. When it receives one, it updates its state (e.g., adds the new message to an array of messages), causing the UI to re-render with the new message.</li>
              <li>It's crucial to clean up the socket connection (<code>socket.disconnect()</code>) in the <code>useEffect</code> cleanup function to prevent memory leaks when the component unmounts.</li>
            </ul>
          </li>
        </ol>

        <h3>Example Frontend Code Snippet</h3>
        <pre><code>
{`import { io } from 'socket.io-client';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    // Connect to the server
    socket.current = io('https://your-socket-server.com');

    // Listen for incoming messages
    socket.current.on('new message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    // Cleanup on unmount
    return () => socket.current.disconnect();
  }, []);

  const sendMessage = (text) => {
    // Send a message to the server
    socket.current.emit('new message', { text });
  };

  // ... render UI with messages and input form
}`}
        </code></pre>
      </div>
    </div>
  );
};

export default Task61_WebSocketsChat;
