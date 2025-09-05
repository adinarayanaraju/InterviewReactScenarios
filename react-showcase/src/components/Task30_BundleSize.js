import React from 'react';

const Task30_BundleSize = () => {
  return (
    <div>
      <h2>Task 30: Bundle Size Analysis (Conceptual)</h2>
      <div className="description">
        <p>
          Analyzing your application's bundle size is crucial for web performance. Large JavaScript bundles can significantly slow down your site's initial load time.
        </p>
        <p>
          Since I cannot run the build process and analyzer tool in this environment, this is a conceptual guide.
        </p>

        <h3>Tools for Analysis</h3>
        <ul>
          <li><strong><code>source-map-explorer</code></strong>: This tool analyzes the production build's source maps to create a visual treemap of where your code is coming from, making it easy to spot large dependencies.</li>
          <li><strong><code>webpack-bundle-analyzer</code></strong>: If you have a custom Webpack setup (or have ejected from Create React App), this plugin provides a more detailed, interactive treemap of your bundle's contents.</li>
        </ul>

        <h3>How to Analyze a Create React App Project</h3>
        <ol>
          <li>
            <strong>Install the tool:</strong>
            <pre><code>npm install --save-dev source-map-explorer</code></pre>
          </li>
          <li>
            <strong>Add a script to <code>package.json</code>:</strong>
            <pre><code>"scripts": &#123;
  "analyze": "npm run build && source-map-explorer 'build/static/js/*.js'",
  ...
&#125;</code></pre>
          </li>
          <li>
            <strong>Run the analysis:</strong>
            <pre><code>npm run analyze</code></pre>
          </li>
          <li>This command will first build your app for production, then open a browser window with an interactive visualization of your bundle, showing the size of each library and component.</li>
        </ol>

        <h3>Common Optimization Strategies</h3>
        <ul>
          <li><strong>Code Splitting:</strong> Use <code>React.lazy()</code> to split your code into smaller chunks that are loaded on demand (as shown in Task 15).</li>
          <li><strong>Tree Shaking:</strong> This is a process where the bundler (like Webpack) automatically removes unused code. Ensure you are importing modules correctly (e.g., <code>import { specificFunction } from 'library';</code> instead of <code>import library from 'library';</code>) to allow tree shaking to work effectively.</li>
          <li><strong>Dependency Analysis:</strong> Use the analyzer to find large libraries. Look for smaller alternatives if possible (e.g., using `date-fns` instead of `moment.js`).</li>
        </ul>
      </div>
    </div>
  );
};

export default Task30_BundleSize;
