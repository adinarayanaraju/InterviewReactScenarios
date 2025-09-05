import React, { useState, useEffect, useRef } from 'react';

const Task77_WebWorkers = () => {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle');
  const [unrelatedCounter, setUnrelatedCounter] = useState(0);

  // Use a ref to hold the worker instance
  const workerRef = useRef(null);

  // Setup worker and event listeners
  useEffect(() => {
    // Create a new worker. The path is relative to the public/index.html
    workerRef.current = new Worker('/heavy-task.worker.js');

    workerRef.current.onmessage = (e) => {
      console.log('Main: Message received from worker');
      setResult(e.data);
      setStatus('success');
    };

    // Cleanup: terminate the worker when the component unmounts
    return () => {
      console.log('Terminating worker.');
      workerRef.current.terminate();
    };
  }, []);

  const handleStartCalculation = () => {
    setStatus('processing');
    setResult(null);
    // Send a message to the worker to start the calculation
    workerRef.current.postMessage({ command: 'calculatePrimes', number: 50000 });
  };

  return (
    <div>
      <h2>Task 77: Web Workers for Heavy Tasks</h2>
      <div className="description">
        <p>
          Web Workers run scripts in a background thread, separate from the main execution thread of a web application. This is essential for offloading long-running, computationally expensive tasks to prevent the UI from freezing.
        </p>
        <ul>
          <li>A separate script, <code>public/heavy-task.worker.js</code>, contains the expensive prime number calculation.</li>
          <li>When you click "Start", this component sends a message to the worker to begin its task.</li>
          <li>While the worker is busy, the main UI thread remains unblocked. You can prove this by clicking the "Increment Counter" button – it will update instantly without any lag.</li>
          <li>When the worker finishes, it sends a message back with the result, which is then displayed in the UI.</li>
        </ul>
      </div>

      <button onClick={handleStartCalculation} disabled={status === 'processing'}>
        {status === 'processing' ? 'Calculating in Background...' : 'Start Heavy Calculation'}
      </button>

      <button onClick={() => setUnrelatedCounter(c => c + 1)} style={{marginLeft: '1rem'}}>
        Increment Counter: {unrelatedCounter}
      </button>

      {status === 'success' && (
        <div style={{marginTop: '1rem'}}>
          <h4>Calculation Complete!</h4>
          <p>Found {result.length} prime numbers.</p>
        </div>
      )}
    </div>
  );
};

export default Task77_WebWorkers;
