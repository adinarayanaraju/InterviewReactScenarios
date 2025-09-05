import React, { useState, useRef } from 'react';

const NUM_INPUTS = 50;

// Controlled Form Component
const ControlledForm = () => {
  const [values, setValues] = useState(Array(NUM_INPUTS).fill(''));

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled form submitted! First value: ${values[0]}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Controlled Form</h4>
      <p>Every keystroke causes a re-render. With many inputs, this can feel slow.</p>
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`Input ${index + 1}`}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

// Uncontrolled Form Component
const UncontrolledForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstValue = formRef.current.elements[0].value;
    alert(`Uncontrolled form submitted! First value: ${firstValue}`);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <h4>Uncontrolled Form</h4>
      <p>No re-renders on input change. State is read directly from the DOM on submit.</p>
      {Array.from({ length: NUM_INPUTS }).map((_, index) => (
        <input
          key={index}
          type="text"
          defaultValue=""
          placeholder={`Input ${index + 1}`}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};


const Task12_ControlledVsUncontrolled = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Task 12: Controlled vs. Uncontrolled Forms Benchmark</h2>
      <button onClick={() => setCounter(c => c + 1)}>Re-render Parent ({counter})</button>

      <div className="description">
        <p>This component compares the performance and developer experience of controlled and uncontrolled forms with a large number of inputs ({NUM_INPUTS}).</p>
        <h4>Developer Experience Trade-offs:</h4>
        <ul>
          <li><strong>Controlled:</strong> More "React-y". State is explicit and easy to access for validation, conditional logic, etc. However, it requires more boilerplate and can cause performance issues in large forms due to frequent re-renders.</li>
          <li><strong>Uncontrolled:</strong> Less code to write. Performance is better for simple data entry as there are no re-renders on keystroke. However, accessing values is less direct (requires refs), and implementing features like instant validation is more complex.</li>
        </ul>
        <h4>Performance:</h4>
        <p>Try typing in the inputs of both forms. The controlled form might feel slightly laggier, especially on older devices, because every single keystroke in any input triggers a re-render of the entire form component. The uncontrolled form has no such lag.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: '45%' }}><ControlledForm /></div>
        <div style={{ width: '45%' }}><UncontrolledForm /></div>
      </div>
    </div>
  );
};

export default Task12_ControlledVsUncontrolled;
