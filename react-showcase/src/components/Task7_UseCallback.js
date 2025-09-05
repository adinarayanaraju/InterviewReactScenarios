import React, { useState, useCallback } from 'react';

// A simple memoized child component that takes a function prop
const ChildButton = React.memo(({ onClick, label }) => {
  console.log(`${label} rendered!`);
  return <button onClick={onClick}>{label}</button>;
});


const Task7_UseCallback = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // This function is recreated on every render of Task7_UseCallback
  const handleIncrementWithoutCallback = () => {
    setCount(c => c + 1);
  };

  // This function is memoized and only recreated if its dependencies change (none in this case)
  const handleIncrementWithCallback = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <h2>Task 7: useCallback to Optimize Handlers</h2>
      <p>Count: <strong>{count}</strong></p>

      <div className="button-group">
        {/* These buttons cause the parent to re-render */}
        <p>This button updates state unrelated to the children below, triggering a parent re-render.</p>
        <button onClick={() => setOtherState(s => s + 1)}>
          Re-render Parent (current: {otherState})
        </button>
      </div>

      <hr />

      <h4>Demonstration</h4>
      <p>Click the "Re-render Parent" button and watch the console. The button with the `useCallback` handler will not re-render.</p>

      <div className="button-group">
        <strong>Without useCallback:</strong>
        <ChildButton onClick={handleIncrementWithoutCallback} label="Increment (No useCallback)" />
      </div>

      <div className="button-group">
        <strong>With useCallback:</strong>
        <ChildButton onClick={handleIncrementWithCallback} label="Increment (With useCallback)" />
      </div>

      <div className="description">
        <p>
          <code>useCallback</code> memoizes a callback function, preventing it from being recreated on every render.
        </p>
        <ul>
          <li>When you click "Re-render Parent", the `Task7_UseCallback` component re-renders.</li>
          <li>The `handleIncrementWithoutCallback` function is a new function object every time.</li>
          <li>Because this new function is passed as a prop, the "Without useCallback" child re-renders, even though it's wrapped in `React.memo`.</li>
          <li>The `handleIncrementWithCallback` function is wrapped in `useCallback`. Its reference does not change across re-renders, so the "With useCallback" child does not re-render.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task7_UseCallback;
