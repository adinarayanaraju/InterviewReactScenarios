import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from './Task37_SnapshotTesting';

describe('Card Component Snapshots', () => {
  test('it renders a standard card correctly', () => {
    const tree = renderer
      .create(
        <Card title="Standard Title">
          <p>Standard content.</p>
        </Card>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders a featured card correctly', () => {
    const tree = renderer
      .create(
        <Card title="Featured Title" isFeatured={true}>
          <p>Featured content.</p>
        </Card>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders with no children correctly', () => {
    const tree = renderer
      .create(<Card title="Card with no children" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
