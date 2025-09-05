import React from 'react';

// A component with some accessibility issues
const InaccessibleForm = () => (
  <div>
    <h4>Inaccessible Component</h4>
    {/* This input has no label associated with it */}
    <input type="text" placeholder="Enter your name" />
    {/* This image is missing an alt attribute */}
    <img src="https://via.placeholder.com/150" />
    <button>Submit</button>
  </div>
);

// The same component with the issues fixed
const AccessibleForm = () => (
  <div>
    <h4>Accessible Component</h4>
    {/* The `htmlFor` on the label is programmatically linked to the input's `id` */}
    <label htmlFor="name-input">Name:</label>
    <input id="name-input" type="text" placeholder="Enter your name" />
    {/* The image has a descriptive alt attribute */}
    <img src="https://via.placeholder.com/150" alt="A 150x150 placeholder image" />
    <button>Submit</button>
  </div>
);


const Task36_AccessibilityTesting = () => {
  return (
    <div>
      <h2>Task 36: Accessibility (a11y) Testing with jest-axe</h2>
      <p>This component demonstrates how to use `jest-axe` to automatically catch accessibility violations in your tests.</p>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <InaccessibleForm />
        <AccessibleForm />
      </div>

      <div className="description">
        <p>
          The test for this concept is located in <code>src/components/Task36_AccessibilityTesting.test.js</code>.
        </p>
        <ul>
          <li>Web accessibility (a11y) is the practice of ensuring your websites are usable by people with disabilities.</li>
          <li><code>jest-axe</code> is a library that integrates the `axe-core` accessibility engine into your Jest tests.</li>
          <li>The test file runs `axe` on the rendered HTML of our components.</li>
          <li>The test for `InaccessibleForm` would fail, reporting the missing label and alt text.</li>
          <li>The test for `AccessibleForm` passes because the issues have been resolved. This provides a safety net against introducing new accessibility bugs.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task36_AccessibilityTesting;
