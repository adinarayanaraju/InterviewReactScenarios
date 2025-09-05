import React from 'react';

const Task68_CSRF = () => {
  return (
    <div>
      <h2>Task 68: CSRF Protection (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Cross-Site Request Forgery (CSRF or XSRF)</strong> is an attack that tricks a user into submitting a malicious request on a different website, using the user's existing authenticated session. For example, if you are logged into your banking website, an attacker could trick you into clicking a link on a malicious site that secretly submits a request to transfer money from your account.
        </p>
        <p>
          Modern web applications often use JWTs stored in localStorage, which are not automatically sent by the browser and are thus not vulnerable to this specific type of attack. However, for traditional session-based applications using cookies, CSRF protection is critical.
        </p>

        <h3>The Synchronizer Token Pattern</h3>
        <p>
          This is the most common way to prevent CSRF attacks.
        </p>
        <ol>
          <li>
            <strong>Token Generation (Backend):</strong> When a user logs in or loads a page with a form, the backend server generates a unique, random, and secret token called the "CSRF token". This token is associated with the user's session on the server.
          </li>
          <li>
            <strong>Token Delivery to Frontend:</strong> The server sends this token to the frontend. A common method is to set it in a readable cookie (e.g., named <code>XSRF-TOKEN</code>) or to embed it directly in the initial HTML page load.
          </li>
          <li>
            <strong>Token Submission (Frontend):</strong> For any state-changing request (<code>POST</code>, <code>PUT</code>, <code>DELETE</code>), the React application must read the CSRF token and include it in the request, typically as a custom HTTP header (e.g., <code>X-CSRF-TOKEN</code>). Libraries like Axios can be configured to do this automatically.
            <pre><code>
{`// Example with Axios
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';

// Now when you make a POST request, Axios will automatically
// read the cookie and set the header.
axios.post('/api/transfer', { amount: 100 });`}
            </code></pre>
          </li>
          <li>
            <strong>Token Validation (Backend):</strong> When the backend receives the request, it performs two checks:
              <ol>
                <li>It looks at the CSRF token associated with the user's session on the server.</li>
                <li>It looks at the CSRF token sent in the <code>X-CSRF-TOKEN</code> header of the request.</li>
              </ol>
            If these two tokens match, the request is considered legitimate and is processed. If they don't match, or if the header is missing, the request is rejected as a potential CSRF attack.
          </li>
        </ol>

        <h3>Why it Works</h3>
        <p>
          A malicious website on another domain cannot read the CSRF token from your application's cookies or HTML. Therefore, it cannot include the required <code>X-CSRF-TOKEN</code> header in its forged request, and the backend will reject it.
        </p>
      </div>
    </div>
  );
};

export default Task68_CSRF;
