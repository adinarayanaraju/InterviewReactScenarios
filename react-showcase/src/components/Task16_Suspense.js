import React, { Suspense } from 'react';

// 1. A mock API call
const fetchUserData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'John Doe', bio: 'A passionate React developer.' });
    }, 2000); // 2-second delay
  });
};

// 2. A wrapper to make the data source "suspense-ready"
// This is a simplified version of what a library like Relay would do.
const createSuspenseResource = (promise) => {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender; // This is what triggers Suspense
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

const resource = createSuspenseResource(fetchUserData());

// 3. The component that fetches data and suspends
const ProfileDetails = () => {
  // Try to read the data. If it's not ready, it will throw the promise
  // and "suspend" the rendering of this component.
  const user = resource.read();
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </div>
  );
};


// 4. The main component for the task
const Task16_Suspense = () => {
  return (
    <div>
      <h2>Task 16: Suspense with Data Fetching (Mock)</h2>
      <div className="content-area">
        <Suspense fallback={<div>Loading user profile...</div>}>
          <ProfileDetails />
        </Suspense>
      </div>
      <div className="description">
        <p>
          <code>Suspense</code> lets you declaratively specify loading states for a part of the component tree.
        </p>
        <ul>
          <li>While official data-fetching with Suspense is still solidifying, we can simulate the behavior.</li>
          <li>The `ProfileDetails` component attempts to read data. If the data isn't ready, it "suspends" by throwing a promise.</li>
          <li>The parent `Suspense` component catches this and displays its `fallback` UI.</li>
          <li>Once the data-fetching promise resolves, React re-renders the `ProfileDetails` component, which can now successfully read the data and render the content.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task16_Suspense;
