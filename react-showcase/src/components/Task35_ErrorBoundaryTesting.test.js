import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Task10_ErrorBoundaries from './Task10_ErrorBoundaries'; // Re-using the component from Task 10

// A component that throws an error
const ProblematicComponent = () => {
  throw new Error('Test Error');
};

describe('ErrorBoundary Testing', () => {
  let originalConsoleError;

  // Before each test, suppress console.error messages
  beforeEach(() => {
    originalConsoleError = console.error;
    console.error = jest.fn();
  });

  // After each test, restore the original console.error
  afterEach(() => {
    console.error = originalConsoleError;
  });

  test('should display an error message when a child component throws an error', () => {
    // We need to use the actual ErrorBoundary component from Task 10, not the whole Task 10 component.
    // Let's assume we can import the ErrorBoundary class directly.
    // Since we can't easily do that without refactoring Task 10, we will test the full component.
    render(<Task10_ErrorBoundaries />);

    // Find the button that throws the error and click it
    const errorButton = screen.getByText(/click me to throw an error/i);
    fireEvent.click(errorButton);

    // Assert that the fallback UI is now visible
    const fallbackMessage = screen.getByText(/something went wrong/i);
    expect(fallbackMessage).toBeInTheDocument();

    // Assert that the original button is gone
    expect(screen.queryByText(/click me to throw an error/i)).not.toBeInTheDocument();
  });

  test('should allow the user to reset the error boundary', () => {
    render(<Task10_ErrorBoundaries />);

    // Trigger the error
    const errorButton = screen.getByText(/click me to throw an error/i);
    fireEvent.click(errorButton);

    // Make sure the fallback is shown
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();

    // Find and click the reset button
    const resetButton = screen.getByRole('button', { name: /try again/i });
    fireEvent.click(resetButton);

    // Assert that the original UI is restored
    expect(screen.getByText(/click me to throw an error/i)).toBeInTheDocument();
    expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();
  });
});
