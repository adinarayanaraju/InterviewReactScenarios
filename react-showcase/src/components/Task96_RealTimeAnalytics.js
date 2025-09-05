import React from 'react';

const Task96_RealTimeAnalytics = () => {
  return (
    <div>
      <h2>Task 96: Real-Time Analytics Dashboard (Conceptual)</h2>
      <div className="description">
        <p>
          A real-time analytics dashboard is a system designed to ingest, process, and visualize data with very low latency, providing an up-to-the-second view of events. This is a complex system that builds on many of the concepts previously discussed (WebSockets, Live Dashboards, etc.).
        </p>

        <h3>High-Level Architecture</h3>
        <ol>
          <li>
            <strong>Data Ingestion:</strong>
            <ul>
              <li>Events (like page views, clicks, or sales) are collected from multiple sources (web app, mobile app, servers).</li>
              <li>To handle high volume, these events are not sent directly to a database. Instead, they are sent to a high-throughput **data ingestion service** or **message queue** like <strong>Amazon Kinesis</strong> or <strong>Apache Kafka</strong>. This service is designed to handle millions of incoming events per second without losing data.</li>
            </ul>
          </li>
          <li>
            <strong>Stream Processing:</strong>
            <ul>
              <li>A **stream processing engine** (like <strong>Apache Flink</strong>, <strong>Spark Streaming</strong>, or a custom service) reads the raw events from the message queue in real-time.</li>
              <li>It performs aggregation and transformation on the data. For example, it doesn't care about every single 'page view' event; instead, it calculates metrics like 'page views per second' or 'total sales per minute'.</li>
              <li>The results of these calculations are then written to a fast, read-optimized database or cache.</li>
            </ul>
          </li>
          <li>
            <strong>Data Serving Layer:</strong>
            <ul>
              <li>An API layer sits in front of the processed data store. This API provides simple endpoints for the frontend to query the aggregated metrics (e.g., <code>GET /api/analytics/sales-per-minute</code>).</li>
            </ul>
          </li>
          <li>
            <strong>Real-Time Push to Frontend:</strong>
            <ul>
              <li>To make the dashboard truly "live", a WebSocket server (see Task 61) subscribes to the processed data stream (or polls the data serving layer very frequently).</li>
              <li>As new aggregated metrics become available (e.g., every second), the WebSocket server pushes this data to all connected dashboard clients.</li>
            </ul>
          </li>
          <li>
            <strong>Frontend Visualization:</strong>
            <ul>
              <li>The React dashboard (see Task 63) receives the new data via its WebSocket connection and updates the charts and graphs in real-time, providing a live view of the system's analytics.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Task96_RealTimeAnalytics;
