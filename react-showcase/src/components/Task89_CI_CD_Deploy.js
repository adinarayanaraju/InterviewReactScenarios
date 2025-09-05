import React from 'react';

const Task89_CI_CD_Deploy = () => {
  return (
    <div>
      <h2>Task 89: CI/CD Deployment Pipeline (Conceptual)</h2>
      <div className="description">
        <p>
          This concept extends the CI pipeline from Task 40 to include <strong>Continuous Deployment (CD)</strong>. The goal is to automatically deploy the application to a hosting environment (like AWS, Vercel, or Netlify) after it has successfully passed all the build and test stages.
        </p>

        <h3>Example Deployment Pipeline with GitHub Actions</h3>
        <p>
          Below is an example of a GitHub Actions workflow that builds, tests, and then deploys a React application to AWS S3 (for static hosting).
        </p>
        <pre><code>
{`name: Deploy React App to AWS S3

on:
  push:
    branches: [ "main" ] # Trigger on push to the main branch

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test -- --watchAll=false

      - name: Build application
        # Set the public URL for the production build
        run: PUBLIC_URL=/ npm run build

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Deploy to S3
        run: aws s3 sync ./build s3://your-s3-bucket-name --delete

      - name: Invalidate CloudFront Cache
        run: aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
`}
        </code></pre>

        <h3>Key Deployment Steps Explained:</h3>
        <ul>
          <li>
            <strong>Build Application:</strong> The <code>npm run build</code> command creates a production-ready, optimized build of the React app in the <code>/build</code> directory.
          </li>
          <li>
            <strong>Configure AWS Credentials:</strong> This step securely uses secrets stored in GitHub (<code>secrets.AWS_ACCESS_KEY_ID</code>) to configure the AWS CLI. These secrets are never exposed in the logs.
          </li>
          <li>
            <strong>Deploy to S3:</strong> The <code>aws s3 sync</code> command efficiently uploads the contents of the <code>/build</code> directory to a specified Amazon S3 bucket. The <code>--delete</code> flag removes any old files from the bucket that are no longer in the build.
          </li>
          <li>
            <strong>Invalidate CloudFront Cache:</strong> If you are using a CDN like AWS CloudFront, you must invalidate its cache after deploying new files. This tells the CDN to fetch the new version of your application from S3, ensuring users see the latest changes immediately.
          </li>
        </ul>
        <p>
          Similar workflows can be created for other providers like Vercel and Netlify, which often have even simpler, more integrated deployment processes.
        </p>
      </div>
    </div>
  );
};

export default Task89_CI_CD_Deploy;
