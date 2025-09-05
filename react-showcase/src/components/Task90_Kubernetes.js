import React from 'react';

const Task90_Kubernetes = () => {
  return (
    <div>
      <h2>Task 90: Kubernetes Deployment (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Kubernetes (K8s)</strong> is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Deploying a full-stack application (e.g., a React frontend and a Node.js backend) to Kubernetes is a standard practice for large-scale, resilient systems.
        </p>

        <h3>The Deployment Process</h3>
        <ol>
          <li>
            <strong>Containerization (Docker):</strong>
            <ul>
              <li>First, each part of your application is containerized using <strong>Docker</strong>.</li>
              <li>You would have a <code>Dockerfile</code> for your React application. This file would typically use a multi-stage build: first, use a Node.js image to build the static assets (<code>npm run build</code>), then copy those static assets into a lightweight web server image like <strong>Nginx</strong>.</li>
              <li>You would have a separate <code>Dockerfile</code> for your Node.js backend API.</li>
              <li>These Docker images are then pushed to a container registry like Docker Hub, Amazon ECR, or Google Container Registry.</li>
            </ul>
          </li>
          <li>
            <strong>Kubernetes Manifests (YAML):</strong>
            <ul>
              <li>You define the desired state of your application in Kubernetes using YAML manifest files.</li>
              <li><strong>Deployment:</strong> A Deployment manifest specifies which Docker image to use and how many replicas (instances, called "Pods") of that container should be running. You would have one Deployment for your React/Nginx container and another for your backend API container.</li>
              <li><strong>Service:</strong> A Service manifest exposes a set of Pods at a stable network address. For example, a 'ClusterIP' service would allow the backend Pods to talk to each other, while a 'LoadBalancer' or 'NodePort' service would expose the backend to external traffic.</li>
              <li><strong>Ingress:</strong> An Ingress manifest manages external access to the services in the cluster, typically handling HTTP/HTTPS routing. It can route requests for <code>/api/*</code> to your backend service and all other requests to your frontend service.</li>
            </ul>
          </li>
          <li>
            <strong>Applying Manifests:</strong>
            <ul>
              <li>Using the <code>kubectl</code> command-line tool, you apply these manifest files to your Kubernetes cluster (e.g., on AWS EKS, Google GKE, or Azure AKS).</li>
              <li><code>kubectl apply -f deployment.yaml</code></li>
            </ul>
          </li>
        </ol>

        <h3>Key Kubernetes Benefits</h3>
        <ul>
          <li><strong>Autoscaling:</strong> Kubernetes can automatically increase or decrease the number of running Pods based on CPU utilization or other metrics, ensuring your application can handle traffic spikes.</li>
          <li><strong>Self-Healing:</strong> If a container crashes, Kubernetes automatically restarts it or replaces it, improving application resilience.</li>
          <li><strong>Rolling Updates:</strong> Kubernetes allows for zero-downtime deployments. You can perform a "rolling update" where new Pods are gradually brought online and old ones are taken down, ensuring the application remains available throughout the update.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task90_Kubernetes;
