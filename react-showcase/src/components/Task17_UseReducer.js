import React, { useReducer } from 'react';

// --- Example 1: Counter ---
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unexpected action type');
  }
};

// --- Example 2: Form ---
const formInitialState = {
  name: '',
  email: '',
  feedback: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'RESET_FORM':
      return formInitialState;
    default:
      throw new Error('Unexpected action type');
  }
};


const Task17_UseReducer = () => {
  // Setup for the counter example
  const [counterState, dispatchCounter] = useReducer(counterReducer, { count: 0 });

  // Setup for the form example
  const [formState, dispatchForm] = useReducer(formReducer, formInitialState);

  const handleInputChange = (e) => {
    dispatchForm({
      type: 'CHANGE_FIELD',
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();
      alert(`Submitting: ${JSON.stringify(formState)}`);
      dispatchForm({ type: 'RESET_FORM' });
  }

  return (
    <div>
      <h2>Task 17: useReducer for Complex State</h2>

      {/* Counter Example */}
      <div className="example-section">
        <h3>Example 1: Simple Counter</h3>
        <p>Count: {counterState.count}</p>
        <div className="button-group">
          <button onClick={() => dispatchCounter({ type: 'increment' })}>+</button>
          <button onClick={() => dispatchCounter({ type: 'decrement' })}>-</button>
          <button onClick={() => dispatchCounter({ type: 'reset' })}>Reset</button>
        </div>
      </div>

      {/* Form Example */}
      <div className="example-section">
        <h3>Example 2: Form State Management</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formState.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formState.email} onChange={handleInputChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="description">
        <p><code>useReducer</code> is an alternative to <code>useState</code> for managing more complex state logic.</p>
        <ul>
          <li>It's ideal when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.</li>
          <li>All state update logic is centralized in the `reducer` function, which makes it easier to understand, test, and debug state transitions.</li>
          <li>Instead of calling multiple `setState` functions, you dispatch a single `action` object that describes what happened.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task17_UseReducer;
