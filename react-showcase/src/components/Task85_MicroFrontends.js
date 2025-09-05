import React from 'react';

const Task85_MicroFrontends = () => {
  return (
    <div>
      <h2>Task 85: Micro-Frontend Architecture (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Micro-frontends</strong> are an architectural style where a web application is composed of small, independent, and separately deployable frontend applications. Just as microservices broke down the backend monolith, micro-frontends break down the frontend monolith.
        </p>

        <h3>Why Use Micro-Frontends?</h3>
        <ul>
          <li><strong>Independent Teams:</strong> Different teams can own and work on different parts of the UI independently, without needing to coordinate releases. The "Search" team can deploy updates to the search feature while the "Checkout" team works on their part.</li>
          <li><strong>Technology Freedom:</strong> One micro-frontend could be written in React, another in Vue, and a third in Angular. While not always recommended, this allows teams to choose the best tool for the job or to incrementally migrate an older application.</li>
          <li><strong>Smaller, More Maintainable Codebases:</strong> Each micro-frontend has its own smaller, more focused codebase, which is easier to understand, develop, and test.</li>
        </ul>

        <h3>Implementation with Module Federation</h3>
        <p>
          <strong>Module Federation</strong> is a feature of Webpack 5 that has become the most popular way to implement micro-frontends.
        </p>
        <ol>
          <li>
            <strong>Host Application (or Shell):</strong> There is one main "host" application. It is responsible for rendering the main layout (header, footer, navigation) and for loading the other micro-frontends.
          </li>
          <li>
            <strong>Remote Applications:</strong> Each micro-frontend (e.g., the 'Search' app or the 'Product' app) is a "remote" application. It is a completely separate React project. In its Webpack configuration, it specifies which of its components it wants to "expose" (e.g., <code>'./ProductPage'</code>).
          </li>
          <li>
            <strong>Consuming Remotes:</strong> The "host" application, in its Webpack configuration, specifies which "remotes" it wants to consume.
          </li>
          <li>
            <strong>Dynamic Loading:</strong> In the host application's code, you can then dynamically import the exposed components from the remotes using <code>React.lazy()</code>. Webpack handles fetching the remote component's code at runtime.
            <pre><code>
{`// In the Host App's router
const ProductPage = React.lazy(() => import('productApp/ProductPage'));

<Route path="/products/:id" element={<ProductPage />} />`}
            </code></pre>
          </li>
        </ol>

        <h3>Challenges</h3>
        <ul>
          <li><strong>Shared State:</strong> Sharing state (like user authentication) between micro-frontends can be complex. Solutions often involve using a shared library, browser storage, or custom events.</li>
          <li><strong>UI Consistency:</strong> Maintaining a consistent look and feel requires a shared component library or design system that all micro-frontends use as a dependency.</li>
          <li><strong>Operational Complexity:</strong> Setting up and managing the build and deployment pipelines for multiple independent frontends is more complex than for a single monolith.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task85_MicroFrontends;
