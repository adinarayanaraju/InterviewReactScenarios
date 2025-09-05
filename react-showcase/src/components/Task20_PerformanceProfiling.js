import React, { useState, useMemo } from 'react';

// A "slow" function to simulate a bottleneck
const slowFunction = (base) => {
  let result = 0;
  for (let i = 0; i < Math.pow(base, 7); i++) {
    result += Math.sin(i) * Math.cos(i);
  }
  return result;
}

// Unoptimized Child
const UnoptimizedChild = ({ data }) => {
  const result = slowFunction(data.value);
  return <div>Child {data.id} computed: {result.toFixed(2)}</div>;
};

// Optimized Child
const OptimizedChild = React.memo(({ data }) => {
  // useMemo will cache the result unless data.value changes
  const result = useMemo(() => slowFunction(data.value), [data.value]);
  return <div>Child {data.id} computed: {result.toFixed(2)}</div>;
});

const generateItems = (count) => {
  return Array.from({ length: count }, (_, i) => ({ id: i, value: 2 }));
};

const Task20_PerformanceProfiling = () => {
  const [unrelatedState, setUnrelatedState] = useState(0);
  const items = useMemo(() => generateItems(5), []); // Generate 5 items for the demo

  return (
    <div>
      <h2>Task 20: Performance Profiling with React DevTools</h2>
      <button onClick={() => setUnrelatedState(c => c + 1)}>
        Trigger Parent Re-render ({unrelatedState})
      </button>

      <div className="description">
        <h3>How to Profile This Component:</h3>
        <ol>
          <li><strong>Open React DevTools:</strong> Right-click, "Inspect", and go to the "Profiler" tab in your browser's dev tools. (You might need to install the React DevTools extension).</li>
          <li><strong>Start Profiling:</strong> Click the blue "Record" button in the Profiler.</li>
          <li><strong>Interact with the App:</strong> Click the "Trigger Parent Re-render" button a few times.</li>
          <li><strong>Stop Profiling:</strong> Click the record button again to stop.</li>
          <li><strong>Analyze the Flamegraph:</strong>
            <ul>
              <li>Select the new commit from the list. The "Flamegraph" view will show you which components took the longest to render.</li>
              <li>Notice that the `UnoptimizedChild` components are colored yellow/orange and have a high render time.</li>
              <li>The `OptimizedChild` components are grey, indicating they did not re-render, thanks to `React.memo`. Their expensive calculation was also skipped, thanks to `useMemo`.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div>
          <h3>Unoptimized Version</h3>
          <p>These children re-render and re-calculate on every parent render.</p>
          {items.map(item => <UnoptimizedChild key={item.id} data={item} />)}
        </div>
        <div>
          <h3>Optimized Version</h3>
          <p>These children do not re-render unnecessarily.</p>
          {items.map(item => <OptimizedChild key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Task20_PerformanceProfiling;
