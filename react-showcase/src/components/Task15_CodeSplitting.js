import React, { useState, Suspense, lazy } from 'react';

// Use React.lazy to import the component.
// This tells React to load this component's code in a separate chunk.
// NOTE: For this to work, the LazyDashboard component should be in its own file.
// To simulate this without creating another file just for the demo, we use a dynamic import syntax
// that bundlers like Webpack (used by Create React App) will understand and split.
// A real implementation would be: const LazyDashboard = lazy(() => import('./LazyDashboard'));
// For this example, we'll define it here and imagine it's a heavy component.

const LazyDashboard = () => (
  <div className="dashboard">
    <h3>Welcome to the Dashboard!</h3>
    <p>This component was loaded lazily.</p>
    <p>Imagine it contains many charts, data tables, and other heavy UI elements.</p>
    <p>By lazy-loading it, its code was not included in the initial page load, making the app load faster.</p>
  </div>
);

// We'll create a "fake" lazy import to demonstrate the concept with Suspense.
const FakeLazyDashboard = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ default: LazyDashboard });
    }, 1500); // Simulate network delay
  });
});


const Task15_CodeSplitting = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      <h2>Task 15: Code Splitting with React.lazy and Suspense</h2>

      <button onClick={() => setShowDashboard(true)} disabled={showDashboard}>
        Load Dashboard
      </button>

      <div className="content-area" style={{marginTop: '20px'}}>
        {/*
          Wrap the lazy component in a Suspense component.
          The `fallback` prop is what React will render while waiting for the lazy component to load.
        */}
        <Suspense fallback={<div>Loading component...</div>}>
          {showDashboard && <FakeLazyDashboard />}
        </Suspense>
      </div>

      <div className="description">
        <p>
          Code-splitting is a feature supported by bundlers like Webpack which can create multiple "chunks" of code that are loaded on demand rather than being included in a single large bundle for the initial load.
        </p>
        <ul>
          <li><code>React.lazy()</code> lets you render a dynamically imported component as a regular component.</li>
          <li>It automatically loads the bundle containing the component when it's first rendered.</li>
          <li><code>React.Suspense</code> allows you to specify a loading indicator (a "fallback" UI) if the component in the tree below it is not yet ready to render.</li>
          <li>Click the button above. The app will show "Loading component..." for 1.5 seconds (simulating a network request) and then render the dashboard.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task15_CodeSplitting;
