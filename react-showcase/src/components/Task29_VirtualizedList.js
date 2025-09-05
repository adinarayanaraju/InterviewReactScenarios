import React, { useState } from 'react';
import { FixedSizeList as List } from 'react-window';

// --- Mock Data ---
// Generate a large list of 10,000 items
const largeList = Array.from({ length: 10000 }, (_, index) => ({
  id: index,
  name: `Item ${index + 1}`,
  description: `This is a description for item number ${index + 1}.`,
}));
// --- End Mock Data ---


// The component for rendering a single row in the virtualized list
const Row = ({ index, style }) => (
  <div style={style} className="list-item">
    <strong>{largeList[index].name}</strong>: {largeList[index].description}
  </div>
);


const Task29_VirtualizedList = () => {
  const [showSlowList, setShowSlowList] = useState(false);

  return (
    <div>
      <h2>Task 29: Performance with Virtualized Lists</h2>

      <div className="description">
        <p>Rendering thousands of DOM nodes at once is very slow and can crash the browser. Virtualization solves this by only rendering the items currently visible in the viewport.</p>
        <p>Below is a virtualized list of 10,000 items using <code>react-window</code>. It renders instantly and scrolls smoothly.</p>
      </div>

      {/* Virtualized List */}
      <div className="list-container" style={{ border: '1px solid #ccc' }}>
        <List
          height={400}
          itemCount={largeList.length}
          itemSize={50} // Height of each row in pixels
          width={'100%'}
        >
          {Row}
        </List>
      </div>

      <div className="description" style={{ marginTop: '2rem' }}>
        <h4>Comparison with a Normal List</h4>
        <p><strong>⚠️ Warning:</strong> Clicking the button below will attempt to render all 10,000 items using a standard <code>.map()</code>. This will likely cause your browser to freeze or become very slow.</p>
        <button onClick={() => setShowSlowList(!showSlowList)}>
          {showSlowList ? 'Hide' : 'Try Rendering the Slow List'}
        </button>
        {showSlowList && (
          <div className="list-container" style={{ height: '400px', overflowY: 'scroll', border: '1px solid red', marginTop: '1rem' }}>
            <ul>
              {largeList.map(item => (
                <li key={item.id} style={{ height: '50px' }}>
                  <strong>{item.name}</strong>: {item.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task29_VirtualizedList;
