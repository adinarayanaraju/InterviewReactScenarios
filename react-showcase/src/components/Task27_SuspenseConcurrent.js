import React, { useState, useTransition } from 'react';

const Task27_SuspenseConcurrent = () => {
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
    // Wrap the slow state update in a transition
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => `Item ${index} - ${e.target.value}`);
      setItems(newItems);
    });
  };

  return (
    <div>
      <h2>Task 27: Concurrency with `useTransition` (Conceptual)</h2>
      <div className="description">
        <p>
          In React 18+, "Concurrent Mode" is no longer a separate mode. Instead, concurrent features are available by default. One of the primary tools for this is the <code>useTransition</code> hook.
        </p>
        <ul>
          <li>Concurrency allows React to work on multiple state updates at once and prioritize them. Urgent updates (like typing in an input) can interrupt less urgent ones (like rendering a large list).</li>
          <li>The <code>useTransition</code> hook lets you mark a state update as a non-urgent "transition".</li>
          <li><strong>In the example below:</strong> Typing in the input is an urgent update. The generation of the 5,000-item list is a slow, non-urgent update.</li>
          <li>By wrapping the slow update in <code>startTransition</code>, we tell React it can be interrupted. This keeps the input field responsive and not laggy, even while the large list is being prepared in the background.</li>
          <li>The <code>isPending</code> boolean tells us when a transition is active, allowing us to show a loading indicator.</li>
        </ul>
      </div>

      <div className="form-group">
        <label htmlFor="concurrent-input">Type here (UI stays responsive):</label>
        <input id="concurrent-input" type="text" value={text} onChange={handleChange} />
      </div>

      {isPending ? (
        <div className="spinner">Updating list...</div>
      ) : (
        <ul style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc' }}>
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
    </div>
  );
};

export default Task27_SuspenseConcurrent;
