import React from 'react';

const Task38_ReduxThunkTesting = () => {
  return (
    <div>
      <h2>Task 38: Testing Redux Async Logic (Thunks)</h2>
      <div className="description">
        <p>
          In traditional Redux, <code>redux-thunk</code> was a middleware that allowed you to write action creators that return a function instead of an action object. This function could then perform async logic (like API calls) and dispatch actions.
        </p>
        <p>
          <strong>Redux Toolkit (RTK)</strong>, which is used in this project, has a built-in thunk middleware by default. Furthermore, it provides a powerful utility, <code>createAsyncThunk</code>, which is the standard way to handle async requests.
        </p>
        <p>
          This example demonstrates how to test an async thunk created with RTK.
        </p>

        <h3>How to Test an Async Thunk</h3>
        <p>The test for this concept is located in <code>src/features/user/userSlice.test.js</code>.</p>
        <ol>
          <li>
            <strong>Create a mock store:</strong> You need a Redux store instance for your test environment to dispatch actions to.
          </li>
          <li>
            <strong>Mock the API:</strong> The thunk will make an API call. You must mock this call to control its outcome (success or failure) and prevent real network requests during tests.
          </li>
          <li>
            <strong>Dispatch the thunk:</strong> Dispatch the async thunk from your test. Since it's async, you'll need to <code>await</code> its completion.
          </li>
          <li>
            <strong>Assert the state:</strong> After the thunk has completed, check the store's state to ensure it has been updated correctly (e.g., user data is present, loading status is correct).
          </li>
          <li>
            <strong>Assert actions (optional):</strong> You can also check which actions were dispatched during the thunk's lifecycle (e.g., <code>pending</code>, <code>fulfilled</code>, or <code>rejected</code>).
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Task38_ReduxThunkTesting;
