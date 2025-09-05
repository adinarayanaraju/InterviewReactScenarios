import React, { useState, useContext, createContext } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// 2. Create the Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // The value object contains the state and the function to update it
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a component that consumes the context
const ThemedPanel = () => {
  const { theme } = useContext(ThemeContext);

  const panelStyles = {
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid',
    margin: '20px 0',
    backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40',
    color: theme === 'light' ? '#212529' : '#f8f9fa',
    borderColor: theme === 'light' ? '#dee2e6' : '#495057',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={panelStyles}>
      <h3>Themed Panel</h3>
      <p>This panel's colors change based on the theme from the context.</p>
      <p>Current theme: <strong>{theme}</strong></p>
    </div>
  );
};

// 4. Create a component that allows changing the context value
const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};


// Main component for the task
const Task9_ContextAPI = () => {
  return (
    // Wrap the components that need the theme in the provider
    <ThemeProvider>
      <div>
        <h2>Task 9: Context API for Theme Switching</h2>
        <ThemeToggleButton />
        <ThemedPanel />
        <div className="description">
          <p>The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
          <ul>
            <li>We create a `ThemeContext` with `createContext()`.</li>
            <li>A `ThemeProvider` component manages the theme state and provides it to all its children.</li>
            <li>The `ThemedPanel` and `ThemeToggleButton` components use the `useContext(ThemeContext)` hook to access the theme and the toggle function directly, no matter how deeply they are nested.</li>
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Task9_ContextAPI;
