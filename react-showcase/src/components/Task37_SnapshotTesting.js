import React from 'react';

// A sample component with multiple props that affect its rendering
export const Card = ({ title, isFeatured, children }) => {
  const cardStyle = {
    border: isFeatured ? '2px solid #ee9b00' : '1px solid #ccc',
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
    boxShadow: isFeatured ? '0 0 10px rgba(238, 155, 0, 0.5)' : 'none',
  };
  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <div>{children}</div>
      {isFeatured && <p style={{ fontWeight: 'bold', color: '#ee9b00' }}>Featured!</p>}
    </div>
  );
};


const Task37_SnapshotTesting = () => {
  return (
    <div>
      <h2>Task 37: Snapshot Testing with Dynamic Props</h2>
      <div className="description">
        <p>
          Snapshot tests are a great way to ensure your UI doesn't change unexpectedly. They are particularly useful for components with many props that result in different visual states.
        </p>
        <p>
          The test for this component is in <code>src/components/Task37_SnapshotTesting.test.js</code>.
        </p>
        <ul>
          <li>We render the `Card` component with different combinations of props (`title`, `isFeatured`, etc.).</li>
          <li>Jest creates a snapshot for each case. This serves as a "visual" documentation of what the component should look like in each state.</li>
          <li>If a developer makes a change that unintentionally alters one of these states, the corresponding snapshot test will fail.</li>
          <li>The developer can then either fix the component or, if the change was intentional, update the snapshot with a single command (<code>npm test -- -u</code>). This makes it a very effective tool for preventing UI regressions.</li>
        </ul>
      </div>

      <h4>Component Examples:</h4>
      <Card title="Standard Card">
        <p>This is a standard card component.</p>
      </Card>
      <Card title="Featured Card" isFeatured={true}>
        <p>This card has the `isFeatured` prop, so it has a special style.</p>
      </Card>
    </div>
  );
};

export default Task37_SnapshotTesting;
