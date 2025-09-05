import React, { useState } from 'react';

const Task44_FileUploads = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle', 'uploading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setStatus('idle');
    setMessage('');
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('Please select a file first.');
      return;
    }

    setStatus('uploading');
    setMessage('');
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Upload failed');
      }

      setStatus('success');
      setMessage(data.message);
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Task 44: File Uploads</h2>
      <div className="description">
        <p>This component demonstrates a simple file upload using a <code>FormData</code> object.</p>
        <ul>
          <li>When you select a file, it's stored in the component's state.</li>
          <li>Clicking "Upload" creates a <code>FormData</code> object, appends the file, and sends it in a <code>POST</code> request.</li>
          <li>The <code>/api/upload</code> endpoint is mocked by MSW, which simulates receiving the file and returning a success message.</li>
        </ul>
      </div>

      <div className="form-group">
        <label htmlFor="file-input">Select a file:</label>
        <input id="file-input" type="file" onChange={handleFileChange} />
      </div>

      <button onClick={handleUpload} disabled={!selectedFile || status === 'uploading'}>
        {status === 'uploading' ? 'Uploading...' : 'Upload'}
      </button>

      {message && (
        <p style={{ color: status === 'error' ? 'red' : 'green', marginTop: '1rem' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Task44_FileUploads;
