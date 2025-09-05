import React from 'react';
import renderer from 'react-test-renderer';
import { add, Greeting } from './Task31_JestUnit';

// Group of tests for the 'add' function
describe('add', () => {
  it('should add two numbers correctly', () => {
    // Assertion
    expect(add(1, 2)).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(add(-1, -5)).toBe(-6);
  });
});


// Group of tests for the 'Greeting' component
describe('Greeting', () => {
  // Snapshot test
  it('renders correctly and matches snapshot', () => {
    const tree = renderer
      .create(<Greeting name="World" />)
      .toJSON();

    // This will create a __snapshots__/Task31_JestUnit.test.js.snap file
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a different name', () => {
    const tree = renderer
      .create(<Greeting name="React" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
