import React, { useState } from 'react';

const CHUNK_SIZE = 1024 * 1024; // 1MB chunks

const Task45_FileChunking = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setStatus('idle');
    setProgress(0);
    setMessage('');
  };

  const uploadChunk = async (chunk, index) => {
    const formData = new FormData();
    formData.append('chunk', chunk);
    formData.append('chunkIndex', index);
    formData.append('fileName', selectedFile.name);

    const response = await fetch('/api/upload-chunk', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to upload chunk ${index}`);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('Please select a file first.');
      return;
    }

    setStatus('uploading');
    setMessage('Starting upload...');
    setProgress(0);

    const totalChunks = Math.ceil(selectedFile.size / CHUNK_SIZE);

    try {
      for (let i = 0; i < totalChunks; i++) {
        const start = i * CHUNK_SIZE;
        const end = start + CHUNK_SIZE;
        const chunk = selectedFile.slice(start, end);

        await uploadChunk(chunk, i);

        const currentProgress = ((i + 1) / totalChunks) * 100;
        setProgress(currentProgress);
        setMessage(`Uploaded chunk ${i + 1} of ${totalChunks}`);
      }
      setStatus('success');
      setMessage('File uploaded successfully in chunks!');
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Task 45: Large File Upload with Chunking</h2>
      <div className="description">
        <p>For large files, uploading in a single request is risky. Chunking breaks the file into smaller pieces and uploads them sequentially.</p>
        <ul>
          <li>The file is sliced into 1MB chunks using the <code>File.slice()</code> method.</li>
          <li>Each chunk is sent in a separate request to the mocked <code>/api/upload-chunk</code> endpoint.</li>
          <li>A progress bar updates as each chunk is successfully uploaded.</li>
          <li>This approach makes large uploads more reliable and allows for features like resumability (not implemented here, but possible).</li>
        </ul>
      </div>

      <div className="form-group">
        <label htmlFor="chunk-file-input">Select a large file:</label>
        <input id="chunk-file-input" type="file" onChange={handleFileChange} />
      </div>

      <button onClick={handleUpload} disabled={!selectedFile || status === 'uploading'}>
        {status === 'uploading' ? 'Uploading...' : 'Upload in Chunks'}
      </button>

      {status === 'uploading' || status === 'success' ? (
        <div style={{ marginTop: '1rem' }}>
          <progress value={progress} max="100" style={{ width: '100%' }} />
          <p>{message}</p>
        </div>
      ) : null}
      {status === 'error' && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
};

export default Task45_FileChunking;
