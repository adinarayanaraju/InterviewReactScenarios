import React, { useState, useMemo } from 'react';

// A child component that is sensitive to prop changes
const ChildComponent = React.memo(({ styles }) => {
  console.log('ChildComponent rendered!');
  return <div style={styles}>I am a child component.</div>;
});


const Task39_PerformanceTesting = () => {
  const [theme, setTheme] = useState('light');

  // UNOPTIMIZED: A new style object is created on every single render.
  // This will cause ChildComponent to re-render even if it's memoized,
  // because the `styles` prop is a new object every time.
  const unoptimizedStyles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '1rem',
    margin: '1rem 0',
  };

  // OPTIMIZED: useMemo caches the style object. It will only be recreated
  // if the `theme` dependency changes.
  const optimizedStyles = useMemo(() => ({
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '1rem',
    margin: '1rem 0',
  }), [theme]);


  return (
    <div>
      <h2>Task 39: Performance Testing with React Profiler</h2>
      <div className="description">
        <p>
          The React DevTools Profiler is an essential tool for diagnosing and fixing performance issues. It allows you to record user interactions and see exactly which components re-rendered and why.
        </p>
        <h3>How to Profile This Example:</h3>
        <ol>
          <li>Open the React DevTools Profiler and click "Record".</li>
          <li>Click the "Toggle Theme" button below. This will change the theme and re-render the optimized child.</li>
          <li>Click the "Unrelated Re-render" button. This will cause this parent component to re-render.</li>
          <li>Stop the profiler.</li>
          <li>
            <strong>Analyze the commits:</strong>
            <ul>
              <li>In the commit for the "Unrelated Re-render", you will see that the "Unoptimized" child re-rendered (it will be colored), but the "Optimized" child did not (it will be grey).</li>
              <li>This is because passing a new object literal `{}` as a prop breaks `React.memo`. Using `useMemo` to cache the prop object fixes this, preventing unnecessary re-renders.</li>
            </ul>
          </li>
        </ol>
      </div>

      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      <button onClick={() => {}}>Unrelated Re-render</button>

      <div>
        <h4>Unoptimized Child</h4>
        <ChildComponent styles={unoptimizedStyles} />
      </div>
      <div>
        <h4>Optimized Child</h4>
        <ChildComponent styles={optimizedStyles} />
      </div>
    </div>
  );
};

export default Task39_PerformanceTesting;
