import React, { useState } from 'react';

let nextId = 4;
const initialItems = [
  { id: 1, text: 'First item' },
  { id: 2, text: 'Second item' },
  { id: 3, text: 'Third item' },
];

// A simple list item component with an input field to demonstrate the issue
const ListItem = ({ text }) => (
  <li>
    {text} <input type="text" placeholder="Type here..." />
  </li>
);

const Task11_KeysInLists = () => {
  const [listWithIndexKey, setListWithIndexKey] = useState([...initialItems]);
  const [listWithIdKey, setListWithIdKey] = useState([...initialItems]);

  const handleRemoveFromIndexList = (indexToRemove) => {
    setListWithIndexKey(list => list.filter((_, i) => i !== indexToRemove));
  };

  const handleRemoveFromIdList = (idToRemove) => {
    setListWithIdKey(list => list.filter(item => item.id !== idToRemove));
  };

  return (
    <div>
      <h2>Task 11: The Importance of Keys in Lists</h2>
      <div className="description">
        <p>This example demonstrates why using an array `index` as a `key` is a bad practice, especially for dynamic lists.</p>
        <p>
          <strong>To see the bug:</strong> Type something into the input for "First item" in the "Bad Practice" list below. Then, click the "Remove" button for that item.
        </p>
        <p>
          <strong>Observation:</strong> The first item is removed, but the text you typed now appears next to "Second item". This is because React used the index as the key and simply re-rendered the components with new data, keeping the underlying input DOM node in the same position.
        </p>
         <p>
          Now try the same thing in the "Good Practice" list. It works as expected because the unique `id` key helps React correctly identify which item was removed.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>Bad Practice: Using index as key</h3>
          <ul>
            {listWithIndexKey.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem text={item.text} />
                <button onClick={() => handleRemoveFromIndexList(index)}>Remove</button>
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div>
          <h3>Good Practice: Using unique id as key</h3>
          <ul>
            {listWithIdKey.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem text={item.text} />
                <button onClick={() => handleRemoveFromIdList(item.id)}>Remove</button>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task11_KeysInLists;
