import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => <div className="spinner">Loading...</div>;
const ErrorMessage = ({ message }) => <div className="error-message">Error: {message}</div>;
const Content = ({ data }) => <div><h3>Here's your data:</h3><p>{data}</p></div>;

const Task4_ConditionalRendering = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = (shouldFail = false) => {
    setStatus('loading');
    setData(null);
    setError(null);

    setTimeout(() => {
      if (shouldFail) {
        setStatus('error');
        setError('Failed to fetch data from the server.');
      } else {
        setStatus('success');
        setData('This is the important data you requested!');
      }
    }, 1500);
  };

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return <LoadingSpinner />;
      case 'error':
        return <ErrorMessage message={error} />;
      case 'success':
        return <Content data={data} />;
      case 'idle':
      default:
        return <p>Click a button to fetch data.</p>;
    }
  }

  return (
    <div>
      <h2>Task 4: Conditional Rendering</h2>
      <div className="button-group">
        <button onClick={() => fetchData(false)} disabled={status === 'loading'}>
          Fetch Data (Success)
        </button>
        <button onClick={() => fetchData(true)} disabled={status === 'loading'}>
          Fetch Data (Error)
        </button>
      </div>
      <div className="content-area">
        {renderContent()}
      </div>
      <div className="description">
        <p>This component demonstrates conditional rendering based on the `status` state.</p>
        <ul>
          <li>When `status` is 'loading', a spinner is shown.</li>
          <li>When `status` is 'error', an error message is displayed.</li>
          <li>When `status` is 'success', the fetched content is rendered.</li>
          <li>Otherwise, an initial message is shown.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task4_ConditionalRendering;
