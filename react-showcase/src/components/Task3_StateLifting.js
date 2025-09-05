import React, { useState } from 'react';

const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grape', 'Strawberry'];

// Child Component 1: The input field
const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="search">Search for a fruit:</label>
      <input
        type="text"
        id="search"
        placeholder="e.g., Apple"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

// Child Component 2: The list display
const DisplayList = ({ searchTerm }) => {
  const filteredFruits = fruits.filter(fruit =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h4>Search Results:</h4>
      <ul>
        {filteredFruits.length > 0 ? (
          filteredFruits.map(fruit => <li key={fruit}>{fruit}</li>)
        ) : (
          <li>No fruits match your search.</li>
        )}
      </ul>
    </div>
  );
};


// Parent Component
const Task3_StateLifting = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h2>Task 3: State Lifting</h2>
      <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <DisplayList searchTerm={searchTerm} />
      <div className="description">
        <p>
          Here, the `searchTerm` state is "lifted up" to the parent component (`Task3_StateLifting`).
        </p>
        <ul>
          <li>The parent holds the state (`searchTerm`) and the function to update it (`setSearchTerm`).</li>
          <li>It passes the state down to `DisplayList` as a prop, so it knows what to render.</li>
          <li>It passes the update function down to `SearchInput` as a prop, so it can modify the state.</li>
          <li>When you type in the input, the state in the parent changes, which causes both siblings to re-render in sync.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task3_StateLifting;
