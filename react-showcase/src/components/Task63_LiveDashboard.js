import React from 'react';

const Task63_LiveDashboard = () => {
  return (
    <div>
      <h2>Task 63: Live Dashboard with WebSockets (Conceptual)</h2>
      <div className="description">
        <p>
          A live dashboard displays real-time data visualizations, such as charts and counters, that update automatically as new data arrives from the server. WebSockets are the ideal technology for streaming this data to the frontend.
        </p>

        <h3>Architecture Overview</h3>
        <ol>
          <li>
            <strong>Data Source & Backend Emitter:</strong>
            <ul>
              <li>The backend has a source of continuous data (e.g., live sales data, server performance metrics, user activity logs).</li>
              <li>A backend process is responsible for periodically gathering this data and emitting it over a WebSocket connection. For example, every second it might send a <code>'dashboard_update'</code> event with a payload like <code>&#123; sales: 150, newUsers: 5, serverCpu: '25%' &#125;</code>.</li>
              <li>To avoid overwhelming clients, the server might aggregate data (e.g., sending total sales per second, not every single sale event).</li>
            </ul>
          </li>
          <li>
            <strong>React Frontend Dashboard Component:</strong>
            <ul>
              <li>The main dashboard component establishes a WebSocket connection when it mounts (in a <code>useEffect</code> hook).</li>
              <li>It sets up a listener for the <code>'dashboard_update'</code> event.</li>
              <li>The component's state holds the data needed for the charts (e.g., an array of sales data points, the current CPU percentage).</li>
              <li>When a <code>'dashboard_update'</code> event is received, the component updates its state with the new data.</li>
            </ul>
          </li>
          <li>
            <strong>Rendering and Visualization:</strong>
            <ul>
              <li>The state update triggers a re-render of the component.</li>
              <li>Charting libraries (like <strong>Chart.js</strong>, <strong>Recharts</strong>, or <strong>D3</strong>) are used to visualize the data. These libraries are designed to efficiently update charts when their input data changes.</li>
              <li>The UI updates smoothly to reflect the new data without any user interaction or page reloads.</li>
            </ul>
          </li>
          <li>
            <strong>Cleanup:</strong>
            <ul>
              <li>It is absolutely critical that the <code>useEffect</code> hook returns a cleanup function.</li>
              <li>This function must disconnect the WebSocket (<code>socket.disconnect()</code>) when the dashboard component unmounts. Failing to do so will result in a memory leak, as the connection and event listeners would persist in the background even after the user navigates away from the page.</li>
            </ul>
          </li>
        </ol>

        <h3>Performance Considerations</h3>
        <p>
          For high-frequency updates, care must be taken to avoid performance bottlenecks on the frontend. This can involve memoizing components that don't need to re-render and choosing efficient charting libraries.
        </p>
      </div>
    </div>
  );
};

export default Task63_LiveDashboard;
