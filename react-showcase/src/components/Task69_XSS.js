import React, { useState } from 'react';

const Task69_XSS = () => {
  const [userInput, setUserInput] = useState('<img src=x onerror="alert(\'XSS Attack! You have been pwned!\')">');

  return (
    <div>
      <h2>Task 69: Cross-Site Scripting (XSS) Protection</h2>
      <div className="description">
        <p>
          XSS is a type of attack where malicious scripts are injected into otherwise benign and trusted websites. React provides strong, built-in protection against this.
        </p>
        <ul>
          <li>By default, React DOM escapes any values embedded in JSX before rendering them. This means you can safely render user input.</li>
          <li>The "Safe Rendering" example below takes the user input and renders it directly. React treats it as a plain string, and no script is executed.</li>
          <li>The <code>dangerouslySetInnerHTML</code> prop is React's mechanism for rendering raw HTML. It is intentionally named to warn developers of the risk. If you use it with unsanitized user input, you open your site up to XSS attacks, as shown in the "Dangerous Rendering" example.</li>
        </ul>
      </div>

      <div className="form-group">
        <label htmlFor="xss-input">Malicious User Input:</label>
        <input
          id="xss-input"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ width: '95%' }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
        <div style={{ width: '48%' }}>
          <h4>Safe Rendering (Default)</h4>
          <div style={{ border: '1px solid green', padding: '1rem' }}>
            {userInput}
          </div>
        </div>
        <div style={{ width: '48%' }}>
          <h4>Dangerous Rendering (<code>dangerouslySetInnerHTML</code>)</h4>
          <div
            style={{ border: '1px solid red', padding: '1rem' }}
            dangerouslySetInnerHTML={{ __html: userInput }}
          />
        </div>
      </div>
    </div>
  );
};

export default Task69_XSS;
