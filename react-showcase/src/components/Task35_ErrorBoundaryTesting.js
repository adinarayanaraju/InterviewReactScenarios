import React from 'react';
// We can reuse the ErrorBoundary from Task 10 for this explanation
import Task10_ErrorBoundaries from './Task10_ErrorBoundaries';

const Task35_ErrorBoundaryTesting = () => {
  return (
    <div>
      <h2>Task 35: Error Boundary Testing</h2>
      <p>This component explains how to test an Error Boundary component.</p>

      <div className="description">
        <p>
          The test for this concept is located in <code>src/components/Task35_ErrorBoundaryTesting.test.js</code>.
        </p>
        <p>
          Since Error Boundaries are class components and their lifecycle methods (`getDerivedStateFromError`, `componentDidCatch`) are not easily triggered by standard RTL renders, testing them requires a specific approach.
        </p>
        <ul>
          <li>We create a child component that throws an error on purpose.</li>
          <li>We render our `ErrorBoundary` component wrapping this problematic child.</li>
          <li>We can then assert that the fallback UI (the "Something went wrong" message) is displayed instead of the app crashing.</li>
          <li>It's also good practice to silence the `console.error` output during these specific tests, as we are intentionally causing and expecting an error.</li>
        </ul>
      </div>

      <h4>Example of the Error Boundary in action:</h4>
      {/* Re-using the component from Task 10 to show the boundary */}
      <Task10_ErrorBoundaries />
    </div>
  );
};

export default Task35_ErrorBoundaryTesting;
