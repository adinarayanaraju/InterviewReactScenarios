import React, { useState, useEffect } from 'react';

const Task1_ControlledForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is not valid';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters long';
      }
      setErrors(newErrors);
      setIsFormValid(Object.keys(newErrors).length === 0);
    };

    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Form submitted successfully!');
      // Reset form
      setFormData({ email: '', password: '' });
    }
  };

  return (
    <div>
      <h2>Task 1: Controlled Form (Login)</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <button type="submit" disabled={!isFormValid}>
          Login
        </button>
      </form>
      <div className="description">
        <p>This is a controlled form. The state of each input is managed by React state (`useState`).</p>
        <ul>
          <li>All inputs are controlled by the `formData` state object.</li>
          <li>Validation runs on every change (`useEffect`).</li>
          <li>Inline error messages are shown for invalid fields.</li>
          <li>The submit button is disabled until the form is valid.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task1_ControlledForm;
