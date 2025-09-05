import React from 'react';

const Task99_FaceVerification = () => {
  return (
    <div>
      <h2>Task 99: Face Verification Flow (Conceptual)</h2>
      <div className="description">
        <p>
          A face verification or "liveness" check is a security process to ensure that a user is a real, live person and matches a reference photo (like a driver's license). This is a complex, full-stack feature involving frontend camera access, backend processing, and often a third-party AI service.
        </p>

        <h3>The Verification Flow</h3>
        <ol>
          <li>
            <strong>Identity Document Upload (Backend/Frontend):</strong>
            <ul>
              <li>The user first uploads a photo of their government-issued ID. This is sent to the backend and stored securely.</li>
            </ul>
          </li>
          <li>
            <strong>Initiate Liveness Check (Frontend):</strong>
            <ul>
              <li>The user clicks "Start Verification" in the React app.</li>
              <li>The app requests permission to access the user's webcam using the browser's <code>navigator.mediaDevices.getUserMedia</code> API.</li>
            </ul>
          </li>
          <li>
            <strong>Capture Video/Images (Frontend):</strong>
            <ul>
              <li>The React component displays the live video feed from the camera.</li>
              <li>It then guides the user through a "challenge". This is crucial to prevent "spoofing" with a static photo. The challenge might be:
                <ul>
                  <li>"Turn your head to the left."</li>
                  <li>"Smile."</li>
                  <li>"Read these random numbers aloud."</li>
                </ul>
              </li>
              <li>During this challenge, the frontend captures a short video clip or a series of still images.</li>
            </ul>
          </li>
          <li>
            <strong>Submit for Verification (Backend):</strong>
            <ul>
              <li>The captured video or images are sent to your backend server.</li>
              <li><strong>Crucially, your backend then forwards this data to a specialized third-party AI/ML identity verification service (e.g., AWS Rekognition, Onfido, Veriff).</strong> Building a secure and accurate facial recognition model from scratch is extremely difficult.</li>
            </ul>
          </li>
          <li>
            <strong>AI/ML Processing (Third-Party Service):</strong>
            <ul>
              <li>The service analyzes the data. It performs a "liveness" check to ensure the video is of a real person and not a recording or mask.</li>
              <li>It then performs a "face match" check, comparing the face from the liveness check to the face on the previously uploaded ID document.</li>
              <li>The service returns a result (e.g., success, failure, or needs manual review) to your backend.</li>
            </ul>
          </li>
          <li>
            <strong>Update Status and Show Result (Backend/Frontend):</strong>
            <ul>
              <li>Your backend receives the result, updates the user's verification status in your database, and sends the final result back to the React app.</li>
              <li>The React app then displays a "Verification Successful" or "Verification Failed" message to the user.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Task99_FaceVerification;
