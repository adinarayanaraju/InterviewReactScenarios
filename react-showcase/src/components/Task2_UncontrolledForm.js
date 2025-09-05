import React, { useRef } from 'react';

const Task2_UncontrolledForm = () => {
  const nameInputRef = useRef(null);
  const feedbackTextRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredFeedback = feedbackTextRef.current.value;

    if (!enteredName || !enteredFeedback) {
      alert('Please fill out all fields.');
      return;
    }

    alert(`Feedback submitted:\nName: ${enteredName}\nFeedback: ${enteredFeedback}`);

    // Reset form
    e.target.reset();
  };

  return (
    <div>
      <h2>Task 2: Uncontrolled Form with Refs</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameInputRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            ref={feedbackTextRef}
          ></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      <div className="description">
        <p>This is an uncontrolled form. The DOM manages the state of the inputs, and we use `useRef` to pull the values when needed.</p>
        <h4>Comparison with Controlled Forms:</h4>
        <h5>Benefits of Uncontrolled Forms:</h5>
        <ul>
          <li>Simpler to implement, less code for simple forms.</li>
          <li>Can be more performant as there are no re-renders on each keystroke.</li>
          <li>Easier to integrate with non-React code or libraries that rely on DOM manipulation.</li>
        </ul>
        <h5>Drawbacks of Uncontrolled Forms:</h5>
        <ul>
          <li>Harder to implement instant validation or conditional logic (e.g., disabling submit button).</li>
          <li>Data is not readily available; you have to "pull" it from the DOM.</li>
          <li>State is not centralized, which can make debugging more complex.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task2_UncontrolledForm;
