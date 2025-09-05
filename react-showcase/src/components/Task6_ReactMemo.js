import React, { useState } from 'react';

// The Child Component
// We wrap it in React.memo()
const MemoizedChild = React.memo(({ constantProp }) => {
  // This log will only appear when the component actually re-renders
  console.log('MemoizedChild rendered!');
  return (
    <div className="child-component">
      <h4>Child Component</h4>
      <p>This component has a prop that doesn't change.</p>
      <p>Prop value: <strong>{constantProp}</strong></p>
      <p>Check the console to see when this component renders.</p>
    </div>
  );
});


// The Parent Component
const Task6_ReactMemo = () => {
  const [counter, setCounter] = useState(0);

  console.log('Parent component rendered!');

  return (
    <div>
      <h2>Task 6: Memoization with React.memo</h2>
      <div className="parent-component">
        <h3>Parent Component</h3>
        <p>This parent has a counter that changes its state.</p>
        <p>Counter: <strong>{counter}</strong></p>
        <button onClick={() => setCounter(c => c + 1)}>
          Increment Parent Counter
        </button>
      </div>

      <MemoizedChild constantProp="I am a constant prop" />

      <div className="description">
        <p>
          <code>React.memo</code> is a higher-order component that memoizes the rendered output of a component.
        </p>
        <ul>
          <li>When the parent's counter is incremented, the parent component re-renders.</li>
          <li>Normally, this would cause all child components to re-render as well.</li>
          <li>However, since <code>MemoizedChild</code> is wrapped in <code>React.memo</code>, it will only re-render if its props change.</li>
          <li>Because <code>constantProp</code> never changes, the child component does not re-render. You can verify this by observing that "MemoizedChild rendered!" is only logged once in the console.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task6_ReactMemo;
