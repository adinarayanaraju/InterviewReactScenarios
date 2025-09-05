import React from 'react';

const Task71_CSP = () => {
  return (
    <div>
      <h2>Task 71: Content Security Policy (CSP) (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Content Security Policy (CSP)</strong> is a powerful security layer that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection. It's a set of rules, delivered via an HTTP header from the backend server, that tells the browser which sources of content (scripts, styles, images, etc.) are allowed to be loaded and executed.
        </p>

        <h3>How it Works</h3>
        <p>
          The backend server includes a <code>Content-Security-Policy</code> HTTP header in its response. The value of this header is a string containing one or more "directives".
        </p>

        <h4>Example Policy:</h4>
        <pre><code>
{`Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://apis.google.com;
  img-src 'self' https://images.unsplash.com;
  style-src 'self' 'unsafe-inline';
  connect-src 'self' https://api.my-app.com;`}
        </code></pre>

        <h3>Common Directives Explained:</h3>
        <ul>
          <li>
            <strong><code>default-src 'self'</code></strong>: This is a fallback directive. It specifies that for any resource type not explicitly defined, content is only allowed to be loaded from the same origin (domain) that the page was served from.
          </li>
          <li>
            <strong><code>script-src 'self' https://apis.google.com</code></strong>: Allows scripts to be loaded from the same origin (<code>'self'</code>) and from <code>https://apis.google.com</code>. Any scripts from other domains will be blocked by the browser.
          </li>
          <li>
            <strong><code>img-src 'self' https://images.unsplash.com</code></strong>: Allows images to be loaded from the same origin and from Unsplash.
          </li>
          <li>
            <strong><code>style-src 'self' 'unsafe-inline'</code></strong>: Allows stylesheets from the same origin. <code>'unsafe-inline'</code> is often needed for compatibility with some libraries that inject styles directly, but it should be avoided if possible as it reduces security. Create React App, for example, may require it in development unless configured otherwise.
          </li>
          <li>
            <strong><code>connect-src 'self' https://api.my-app.com</code></strong>: Restricts which URLs the frontend can connect to via <code>fetch</code>, WebSockets, etc. In this case, only to its own origin or the specified API domain.
          </li>
        </ul>

        <h3>Impact on React Development</h3>
        <ul>
          <li><strong>Inline Scripts:</strong> A strict CSP often forbids inline scripts (<code>&lt;script&gt;...&lt;/script&gt;</code>) and inline event handlers (<code>onclick="..."</code>). This is generally not an issue for modern React apps, which attach event listeners programmatically.</li>
          <li><strong>Nonce or Hashes:</strong> For even higher security, instead of whitelisting domains, you can use a "nonce" (a random string generated for each request) or a hash of your script files. The CSP header would then specify this nonce/hash, and only scripts with a matching attribute will be executed. This is more complex to set up and often requires server-side rendering or template modification.</li>
        </ul>
        <p>
          Implementing a CSP is a critical step in hardening a web application against XSS attacks. It must be configured carefully on the backend server or edge network (like a CDN or reverse proxy).
        </p>
      </div>
    </div>
  );
};

export default Task71_CSP;
