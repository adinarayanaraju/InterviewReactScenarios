import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

// --- Custom Debounce Hook ---
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to value (the latest value) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Return a cleanup function that will be called every time ...
    // ... useEffect is re-called. useEffect will only be re-called ...
    // ... if value changes (see the inputs array below).
    // This is how we prevent debouncedValue from changing if value is ...
    // ... changed within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
}
// --- End Custom Hook ---


// --- Mock API ---
const mockData = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grape', 'Strawberry'];

const searchApi = async (query) => {
  console.log(`Searching for: ${query}`);
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  if (!query) return [];
  return mockData.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );
};
// --- End Mock API ---


const Task26_Debouncing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Get the debounced search term
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms delay

  const { data: searchResults, isFetching } = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: () => searchApi(debouncedSearchTerm),
    // Only run the query if the debounced term is not empty
    enabled: !!debouncedSearchTerm,
  });

  return (
    <div>
      <h2>Task 26: Debouncing API Search</h2>
      <div className="form-group">
        <label htmlFor="search">Search for a fruit:</label>
        <input
          id="search"
          type="text"
          placeholder="e.g., 'app'"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isFetching && <div className="spinner">Searching...</div>}

      <ul>
        {searchResults?.map(item => <li key={item}>{item}</li>)}
      </ul>
      {!searchResults && !isFetching && <p>Type to see results.</p>}

      <div className="description">
        <p>Debouncing is a technique to limit the rate at which a function gets called. Here, we avoid sending an API request on every single keystroke.</p>
        <ul>
          <li>A custom <code>useDebounce</code> hook is used to delay the update of the search term.</li>
          <li>The user types in the input, updating the <code>searchTerm</code> state on every keystroke.</li>
          <li>The <code>debouncedSearchTerm</code> only updates 500ms after the user stops typing.</li>
          <li>React Query's <code>useQuery</code> hook uses this debounced term as its query key and in its query function.</li>
          <li>This ensures the API call is only made once the user has paused typing, significantly reducing the number of requests.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task26_Debouncing;
