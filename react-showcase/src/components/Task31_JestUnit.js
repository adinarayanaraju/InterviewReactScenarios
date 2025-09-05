import React from 'react';

// A simple component to be tested
export const Greeting = ({ name }) => <div>Hello, {name}!</div>;

// A simple function to be tested
export const add = (a, b) => a + b;


const Task31_JestUnit = () => {
  return (
    <div>
      <h2>Task 31: Jest Unit Testing & Snapshot Testing</h2>
      <p>This component doesn't render much itself. Its purpose is to be the subject of unit and snapshot tests.</p>

      <div className="description">
        <p>
          The tests for this task are located in <code>src/components/Task31_JestUnit.test.js</code>.
        </p>
        <ul>
          <li><strong>Unit Testing:</strong> Involves testing individual functions or components in isolation. We have a test for a simple `add` function.</li>
          <li><strong>Snapshot Testing:</strong> A tool to make sure your UI does not change unexpectedly. The first time a snapshot test is run, Jest creates a "snapshot" file of the rendered component. On subsequent runs, Jest compares the new render output to the saved snapshot. If they don't match, the test fails.</li>
          <li>To run the tests for this project, you can use the command <code>npm test</code> in your terminal.</li>
        </ul>
        <Greeting name="World" />
      </div>
    </div>
  );
};

export default Task31_JestUnit;
