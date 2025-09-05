import React from 'react';

const Task78_ServiceWorkers = () => {
  return (
    <div>
      <h2>Task 78: Service Workers for Offline Mode (Conceptual)</h2>
      <div className="description">
        <p>
          A <strong>Service Worker</strong> is a script that your browser runs in the background, separate from a web page, enabling features that don't need a web page or user interaction. Key features include offline capabilities, background syncs, and push notifications. This is the core technology behind Progressive Web Apps (PWAs).
        </p>

        <h3>How Service Workers Enable Offline Mode</h3>
        <p>
          The service worker acts as a programmable network proxy. It can intercept all network requests made by your application and decide how to respond to them.
        </p>
        <ol>
          <li>
            <strong>Registration:</strong> The first time a user visits your site, your React app registers the service worker script (e.g., <code>service-worker.js</code>).
          </li>
          <li>
            <strong>Installation & Caching (The "Install" Event):</strong> Once registered, the service worker gets an <code>install</code> event. This is the perfect time to cache your app's static assets—the "app shell". This includes the main HTML file, JavaScript bundles, CSS files, and key images or fonts. The service worker uses the <strong>Cache API</strong> to store these files.
          </li>
          <li>
            <strong>Activation (The "Activate" Event):</strong> After installation, the worker activates. This is a good time to manage old caches, deleting outdated assets from previous versions.
          </li>
          <li>
            <strong>Intercepting Requests (The "Fetch" Event):</strong> Now the service worker is in control. It will receive a <code>fetch</code> event for every single network request made by your app. Here, you implement your caching strategy. A common strategy is "Cache, falling back to Network":
              <ul>
                <li>The service worker first checks if a response for the request exists in the cache.</li>
                <li><strong>If yes (Cache Hit):</strong> It immediately returns the cached response without ever going to the network. This is what makes the app load instantly on subsequent visits, even if offline.</li>
                <li><strong>If no (Cache Miss):</strong> It makes the network request as usual, gets the response from the server, and before returning it to the app, it also stores a copy in the cache for next time.</li>
              </ul>
            </li>
        </ol>

        <h3>Service Workers in Create React App</h3>
        <ul>
          <li>Create React App comes with a service worker file and configuration out of the box (using a library called <strong>Workbox</strong>), but it's opt-in.</li>
          <li>To enable it, you need to change <code>serviceWorker.unregister()</code> to <code>serviceWorker.register()</code> in your <code>src/index.js</code> file.</li>
          <li>Workbox automatically generates a service worker that precaches all of your app's static assets during the build process, providing a solid foundation for offline capabilities. Customizing this behavior for more complex offline needs (like caching API calls) requires more advanced configuration.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task78_ServiceWorkers;
