import React, { useState, useMemo } from 'react';

// Generate a large list of numbers for demonstration
const largeListOfNumbers = Array.from({ length: 10000 }, (_, i) => i + 1);

// The "expensive" function to filter the list
const findMultiples = (list, divisor) => {
  console.log('--- Running expensive calculation! ---');
  // Simulate a delay to make the calculation feel "heavy"
  const startTime = performance.now();
  while (performance.now() - startTime < 200) {
    // Artificial delay
  }
  return list.filter(num => num % divisor === 0);
};


const Task8_UseMemo = () => {
  const [divisor, setDivisor] = useState(1);
  const [unrelatedCounter, setUnrelatedCounter] = useState(0);

  // Using useMemo to cache the result of the expensive calculation
  // This will only re-run if `divisor` changes.
  const multiples = useMemo(() => {
    return findMultiples(largeListOfNumbers, divisor);
  }, [divisor]);

  // For comparison: the same calculation without useMemo
  // This will run on EVERY render of the component.
  // const multiplesWithoutMemo = findMultiples(largeListOfNumbers, divisor);

  return (
    <div>
      <h2>Task 8: useMemo for Expensive Calculations</h2>

      <div className="form-group">
        <label htmlFor="divisor">Find multiples of:</label>
        <input
          type="number"
          id="divisor"
          value={divisor}
          onChange={(e) => setDivisor(Number(e.target.value) || 1)}
          min="1"
        />
      </div>

      <div className="button-group">
        <p>This button only updates an unrelated counter, but it will trigger a re-render.</p>
        <button onClick={() => setUnrelatedCounter(c => c + 1)}>
          Increment Counter: {unrelatedCounter}
        </button>
      </div>

      <h4>Results:</h4>
      <p>Found {multiples.length} multiples of {divisor}.</p>
      <div className="results-box">
        {multiples.slice(0, 20).join(', ')}...
      </div>

      <div className="description">
        <p>
          <code>useMemo</code> caches the result of a calculation between re-renders.
        </p>
        <ul>
          <li>The function to find multiples is artificially slowed down to simulate a heavy task.</li>
          <li>When you change the "divisor", the expensive calculation runs and the result is cached. Check the console.</li>
          <li>When you click the "Increment Counter" button, the component re-renders, but the expensive calculation does <strong>not</strong> run again because its dependency (`divisor`) has not changed. The cached result is used instead.</li>
          <li>If you were to uncomment the `multiplesWithoutMemo` line, you would notice a significant lag every time you click the counter button.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task8_UseMemo;
