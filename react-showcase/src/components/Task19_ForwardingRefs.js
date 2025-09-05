import React, { useRef, forwardRef } from 'react';

// 1. The custom Input component wrapped in forwardRef
// The component receives `props` as the first argument and `ref` as the second argument.
const CustomInput = forwardRef((props, ref) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="text"
        ref={ref} // Forward the ref to the underlying input element
        placeholder="I am a custom input"
      />
    </div>
  );
});


// 2. The parent component that uses the custom input
const Task19_ForwardingRefs = () => {
  // Create a ref in the parent component
  const inputRef = useRef(null);

  const handleFocusClick = () => {
    // Use the ref to call .focus() on the input inside CustomInput
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Task 19: Forwarding Refs</h2>
      <p>This parent component will focus the custom input field below by using a forwarded ref.</p>

      {/* Pass the ref to the custom component */}
      <CustomInput ref={inputRef} id="my-custom-input" label="My Custom Input:" />

      <button onClick={handleFocusClick}>
        Focus the Custom Input
      </button>

      <div className="description">
        <p>
          By default, you cannot pass a `ref` to a function component. `ref` forwarding gives a component the option to "forward" a `ref` it receives to one of its children.
        </p>
        <ul>
          <li>The `CustomInput` component is wrapped in `React.forwardRef()`.</li>
          <li>This allows the parent (`Task19_ForwardingRefs`) to create a `ref` (`inputRef`) and pass it to `<CustomInput>`.</li>
          <li>`CustomInput` then attaches that same ref to the actual `<input>` DOM node inside it.</li>
          <li>This gives the parent component direct access to the child's DOM node, allowing it to call methods like `.focus()`.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task19_ForwardingRefs;
