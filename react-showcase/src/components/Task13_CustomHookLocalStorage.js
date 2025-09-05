import React, { useState, useEffect } from 'react';

// 1. The Custom Hook: useLocalStorage
const useLocalStorage = (key, initialValue) => {
  // Get from local storage then
  // parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};


// 2. The Component using the custom hook
const Task13_CustomHookLocalStorage = () => {
  // Use our custom hook instead of useState
  const [name, setName] = useLocalStorage('username', 'Guest');

  return (
    <div>
      <h2>Task 13: Custom Hook for Local Storage (`useLocalStorage`)</h2>
      <div className="form-group">
        <label htmlFor="username">Your Name:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <h3>Hello, {name}!</h3>

      <div className="description">
        <p>This component uses a custom hook called <code>useLocalStorage</code> to persist state.</p>
        <ul>
          <li>The <code>useLocalStorage</code> hook works like <code>useState</code>, but it synchronizes its state with the browser's Local Storage.</li>
          <li>When the component first loads, it tries to read the 'username' from Local Storage. If it's not there, it defaults to 'Guest'.</li>
          <li>When you type in the input, the state changes, and the hook automatically saves the new value to Local Storage.</li>
          <li><strong>To test:</strong> Change the name in the input field, then reload the page. Your name will still be there!</li>
        </ul>
      </div>
    </div>
  );
};

export default Task13_CustomHookLocalStorage;
