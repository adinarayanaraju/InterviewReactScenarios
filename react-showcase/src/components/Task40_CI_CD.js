import React from 'react';

const sampleCiYaml = `
name: React App CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "main" branch
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build-and-test"
  build-and-test:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - name: Checkout repository
        uses: actions/checkout@v3

      # Sets up a Node.js environment
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      # Installs dependencies using npm ci for faster, more reliable installs
      - name: Install dependencies
        run: npm ci

      # Runs the linter (assuming you have an "eslint" script in package.json)
      # - name: Run linter
      #  run: npm run lint

      # Runs the test suite
      - name: Run tests
        run: npm test -- --watchAll=false

      # Runs the production build
      - name: Build application
        run: npm run build
`;

const Task40_CI_CD = () => {
  return (
    <div>
      <h2>Task 40: CI/CD Testing Pipeline (Conceptual)</h2>
      <div className="description">
        <p>
          A CI/CD pipeline automates the process of testing and deploying your code, ensuring quality and consistency.
        </p>
        <p>
          Since I cannot set up a real pipeline, this guide explains how to do it using <strong>GitHub Actions</strong>, a very popular CI/CD platform.
        </p>

        <h3>What is CI/CD?</h3>
        <ul>
          <li><strong>Continuous Integration (CI):</strong> The practice of frequently merging code changes from multiple developers into a central repository. After each merge, an automated build and test run is performed. This catches integration bugs early.</li>
          <li><strong>Continuous Deployment/Delivery (CD):</strong> The practice of automatically deploying all code changes that pass the CI stage to a testing or production environment.</li>
        </ul>

        <h3>Example GitHub Actions Workflow</h3>
        <p>
          To set up this pipeline, you would create a file named <code>.github/workflows/ci.yml</code> in the root of your project and paste the content below into it.
        </p>
        <pre style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px', whiteSpace: 'pre-wrap' }}>
          <code>
            {sampleCiYaml}
          </code>
        </pre>
        <p>
          This workflow ensures that every time code is pushed to the `main` branch, it is automatically checked to make sure it installs, tests, and builds correctly, preventing broken code from being merged.
        </p>
      </div>
    </div>
  );
};

export default Task40_CI_CD;
