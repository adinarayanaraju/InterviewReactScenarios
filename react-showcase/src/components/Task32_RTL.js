import React, { useState } from 'react';

const Task32_RTL = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h2>Task 32: React Testing Library</h2>
      <p>This component contains a simple form that we can test using RTL.</p>

      {submitted ? (
        <div>
          <h3>Thank you!</h3>
          <p>Subscription successful for: {email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email-input">Email:</label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit">Subscribe</button>
        </form>
      )}

      <div className="description">
        <p>
          React Testing Library (RTL) is a testing utility that encourages good testing practices. It focuses on testing components from the user's perspective.
        </p>
        <ul>
          <li>The test for this component is in <code>src/components/Task32_RTL.test.js</code>.</li>
          <li>The test uses RTL to render the component, simulate a user typing an email and clicking the "Subscribe" button, and then asserts that the success message is displayed.</li>
          <li>This approach ensures that your tests resemble how your users interact with your application, making them more robust and maintainable.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task32_RTL;
