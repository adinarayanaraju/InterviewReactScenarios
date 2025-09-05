import React from 'react';

const Task79_PWA = () => {
  return (
    <div>
      <h2>Task 79: Progressive Web App - PWA (Conceptual)</h2>
      <div className="description">
        <p>
          A <strong>Progressive Web App (PWA)</strong> is a type of application software delivered through the web, built using common web technologies including HTML, CSS, and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices. PWAs provide an app-like experience to users.
        </p>

        <h3>Core Characteristics of a PWA</h3>
        <ul>
          <li>
            <strong>Installable:</strong> PWAs can be "installed" on the user's home screen, making them easily accessible. This is enabled by the <strong>Web App Manifest</strong>.
          </li>
          <li>
            <strong>Reliable:</strong> They can load instantly, even in uncertain network conditions, thanks to caching with a <strong>Service Worker</strong>.
          </li>
          <li>
            <strong>Capable:</strong> They can access modern platform APIs to provide app-like features such as push notifications and background sync.
          </li>
        </ul>

        <h3>Key Technical Components</h3>
        <ol>
          <li>
            <strong>Service Worker:</strong> (As described in Task 78) This is the backbone of a PWA. It handles caching for offline reliability and enables features like push notifications.
          </li>
          <li>
            <strong>Web App Manifest (<code>manifest.json</code>):</strong> This is a simple JSON file that gives the browser information about your web application and how it should behave when 'installed' on the user's mobile device or desktop. It includes details like:
            <ul>
              <li><code>name</code> and <code>short_name</code>: The app's name.</li>
              <li><code>icons</code>: A set of icons for the home screen, app launcher, etc., in various sizes.</li>
              <li><code>start_url</code>: The URL that should be loaded when the user launches the app.</li>
              <li><code>display</code>: How the app should be displayed (e.g., <code>standalone</code> for an app-like feel without browser UI).</li>
              <li><code>background_color</code> and <code>theme_color</code>: For the splash screen and browser toolbar.</li>
            </ul>
            Create React App includes a default <code>public/manifest.json</code> file that you can customize for your PWA.
          </li>
          <li>
            <strong>Served over HTTPS:</strong> PWAs must be served over a secure connection. Service workers can only be registered on pages served over HTTPS.
          </li>
        </ol>

        <h3>Benefits of PWAs</h3>
        <ul>
          <li><strong>No App Store Needed:</strong> PWAs can be installed directly from the web, bypassing the need for app stores and their associated fees and review processes.</li>
          <li><strong>Cross-Platform:</strong> A single codebase works across all platforms and devices.</li>
          <li><strong>Discoverability:</strong> They are discoverable and linkable, just like any other website.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task79_PWA;
