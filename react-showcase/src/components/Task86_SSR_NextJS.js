import React from 'react';

const Task86_SSR_NextJS = () => {
  return (
    <div>
      <h2>Task 86: Server-Side Rendering (SSR) with Next.js (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Server-Side Rendering (SSR)</strong> is a technique where the content for a web page is rendered on the server, and a fully populated HTML file is sent to the browser. This contrasts with a standard Client-Side Rendered (CSR) React app, where the browser receives a minimal HTML file and a large JavaScript bundle, and the JavaScript is responsible for rendering the content.
        </p>
        <p>
          <strong>Next.js</strong> is a popular React framework that provides a robust, production-ready implementation of SSR.
        </p>

        <h3>How SSR Works in Next.js</h3>
        <ol>
          <li>
            <strong>User Request:</strong> A user navigates to a page, e.g., <code>/products/123</code>.
          </li>
          <li>
            <strong>Server-Side Execution:</strong> The Next.js server receives the request. For that specific page, you can define a special async function called <code>getServerSideProps</code>.
            <pre><code>
{`export async function getServerSideProps(context) {
  // Fetch data needed for this page from a database or API
  const res = await fetch('https://api.myapp.com/products/123');
  const product = await res.json();

  // Pass data to the page component as props
  return { props: { product } };
}`}
            </code></pre>
          </li>
          <li>
            <strong>Server-Side Rendering:</strong> The Next.js server uses the props returned from <code>getServerSideProps</code> to render the React page component into a complete HTML string on the server.
          </li>
          <li>
            <strong>HTML Response:</strong> The server sends this fully rendered HTML to the browser. The user sees the complete page content almost instantly, without waiting for any JavaScript to load and run.
          </li>
          <li>
            <strong>Hydration:</strong> After the HTML, the browser loads the page's JavaScript. React then runs a process called "hydration", where it attaches its event listeners to the existing HTML, making the page fully interactive.
          </li>
        </ol>

        <h3>Benefits of SSR</h3>
        <ul>
          <li><strong>Improved SEO:</strong> Search engine crawlers can easily read the fully rendered HTML content, which is crucial for Search Engine Optimization. Crawlers may struggle to index content rendered by client-side JavaScript.</li>
          <li><strong>Faster First Contentful Paint (FCP):</strong> Users see meaningful content much faster because they don't have to wait for the JavaScript bundle to download and execute before the page is rendered.</li>
        </ul>
        <h3>Drawbacks of SSR</h3>
        <ul>
          <li><strong>Server Load:</strong> Every request requires server-side computation, which can increase server costs and complexity compared to just serving static files.</li>
          <li><strong>Slower Time to Interactive (TTI):</strong> While the content is visible quickly, the page is not fully interactive until the JavaScript has loaded and hydration is complete.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task86_SSR_NextJS;
