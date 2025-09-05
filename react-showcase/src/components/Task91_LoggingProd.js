import React from 'react';

const Task91_LoggingProd = () => {
  return (
    <div>
      <h2>Task 91: Logging & Monitoring in Production (Conceptual)</h2>
      <div className="description">
        <p>
          This concept builds on Task 59, focusing on the specific tools and strategies used to aggregate and analyze logs and metrics from a production application, often deployed in a containerized environment like Kubernetes.
        </p>

        <h3>The "Three Pillars of Observability"</h3>
        <p>A robust production monitoring strategy is often built around three pillars:</p>
        <ol>
          <li>
            <strong>1. Logs (What happened?):</strong>
            <ul>
              <li><strong>Structured Logging:</strong> As mentioned before, all application components (frontend and backend) must emit structured logs (JSON).</li>
              <li><strong>Log Aggregation:</strong> In a distributed system like Kubernetes, logs from all containers need to be collected and sent to a central location. A common pattern is to use a "sidecar" container or a cluster-level agent (like <strong>Fluentd</strong> or <strong>Logstash</strong>) to scrape logs from all running pods.</li>
              <li><strong>Log Management Service:</strong> These aggregated logs are then shipped to a service like <strong>Datadog</strong>, <strong>Splunk</strong>, or an <strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana), where they can be indexed, searched, and visualized.</li>
            </ul>
          </li>
          <li>
            <strong>2. Metrics (How is it performing?):</strong>
            <ul>
              <li><strong>Instrumentation:</strong> Your backend application is instrumented to expose key performance indicators (metrics) on a specific endpoint (e.g., <code>/metrics</code>). This includes things like API request latency, error rates, database query times, and CPU/memory usage. The <strong>Prometheus</strong> client library is a common tool for this.</li>
              <li><strong>Scraping:</strong> A monitoring server like <strong>Prometheus</strong> is configured to periodically "scrape" (fetch) the metrics from all running instances of your application.</li>
              <li><strong>Visualization & Alerting:</strong> The collected time-series data is then visualized in a dashboarding tool like <strong>Grafana</strong>. You can build dashboards to track the health of your system and configure alerts (e.g., via PagerDuty or Slack) to be notified if a metric crosses a critical threshold (e.g., "API error rate > 5%").</li>
            </ul>
          </li>
          <li>
            <strong>3. Traces (Where did it happen?):</strong>
            <ul>
              <li><strong>Distributed Tracing:</strong> For a request that travels through multiple microservices, distributed tracing allows you to follow its entire lifecycle.</li>
              <li>Libraries based on <strong>OpenTelemetry</strong> are used to propagate a unique "trace ID" with a request as it hops from the frontend, to the BFF, to downstream microservices, and back.</li>
              <li>This data is sent to a tracing tool like <strong>Jaeger</strong> or <strong>Datadog APM</strong>, allowing you to visualize the entire call stack and pinpoint exactly where a failure occurred or where a performance bottleneck lies in your distributed system.</li>
            </ul>
          </li>
        </ol>
        <p>
          Integrating these three pillars provides deep insight into your production system, enabling you to quickly diagnose and resolve issues.
        </p>
      </div>
    </div>
  );
};

export default Task91_LoggingProd;
