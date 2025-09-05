import React, { useState, useEffect } from 'react';

const Task5_UseEffectCleanup = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update state
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener when the component mounts
    window.addEventListener('resize', handleResize);

    console.log('Event listener added.');

    // Cleanup function: remove event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event listener removed. (Cleanup)');
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div>
      <h2>Task 5: useEffect with Cleanup</h2>
      <p>This component tracks the browser window's dimensions.</p>
      <div className="dimensions">
        <p>Width: <strong>{windowSize.width}px</strong></p>
        <p>Height: <strong>{windowSize.height}px</strong></p>
      </div>
      <div className="description">
        <p>
          The `useEffect` hook sets up an event listener for window resizing.
        </p>
        <ul>
          <li>The effect runs once when the component mounts, because of the empty dependency array `[]`.</li>
          <li>It adds a `resize` event listener to the `window` object.</li>
          <li>
            <strong>Crucially</strong>, it returns a "cleanup" function. React will execute this function when the component is unmounted (e.g., when you navigate to another task).
          </li>
          <li>This cleanup prevents memory leaks by ensuring the event listener doesn't persist after the component is gone. Check the console to see the logs.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task5_UseEffectCleanup;
