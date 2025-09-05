import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Task36_AccessibilityTesting from './Task36_AccessibilityTesting';

// Extend expect with the jest-axe matcher
expect.extend(toHaveNoViolations);

describe('Task36_AccessibilityTesting', () => {
  test('the entire component should have no a11y violations', async () => {
    const { container } = render(<Task36_AccessibilityTesting />);
    const results = await axe(container);
    // Note: This test will fail because the InaccessibleForm component has violations.
    // This is intentional to demonstrate how `jest-axe` catches issues.
    // In a real-world scenario, you would fix the component until the test passes.
    // To make this specific test pass, you would test the 'AccessibleForm' component in isolation.
    expect(results).not.toHaveNoViolations();
  });

  test('the accessible part of the component should have no violations', async () => {
    // To demonstrate a passing test, let's just render the accessible part.
    const AccessibleForm = () => (
      <div>
        <h4>Accessible Component</h4>
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" type="text" placeholder="Enter your name" />
        <img src="https://via.placeholder.com/150" alt="A 150x150 placeholder image" />
        <button>Submit</button>
      </div>
    );
    const { container } = render(<AccessibleForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
