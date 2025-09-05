import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from './Task26_Debouncing'; // Re-using the debounce hook

// --- API Function ---
const fetchItems = async ({ queryKey }) => {
  const [_key, { page, limit, sort, order, query }] = queryKey;
  const params = new URLSearchParams({
    _page: page,
    _limit: limit,
    _sort: sort,
    _order: order,
    q: query,
  });

  const response = await fetch(`/api/items?${params.toString()}`);
  if (!response.ok) throw new Error('Network response was not ok');

  const totalCount = parseInt(response.headers.get('X-Total-Count'), 10);
  const items = await response.json();

  return { items, totalCount };
};
// --- End API Function ---


const Task51_Pagination = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [sort, setSort] = useState('name');
  const [order, setOrder] = useState('asc');
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['items', { page, limit, sort, order, query: debouncedQuery }],
    queryFn: fetchItems,
    placeholderData: (previousData) => previousData,
  });

  const totalPages = data ? Math.ceil(data.totalCount / limit) : 0;

  return (
    <div>
      <h2>Task 51 & 52: Pagination, Sorting, and Filtering</h2>
      <div className="description">
        <p>This component demonstrates a table of data with controls for pagination, sorting, and filtering, all handled by a single React Query hook that sends the appropriate parameters to a mock backend.</p>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="category">Sort by Category</option>
          <option value="price">Sort by Price</option>
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Data Table */}
      {isPending && <p>Loading...</p>}
      {isError && <p style={{color: 'red'}}>{error.message}</p>}
      {data && (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="button-group">
            <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>
              Previous
            </button>
            <span> Page {page} of {totalPages} </span>
            <button onClick={() => setPage(p => p + 1)} disabled={page >= totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task51_Pagination;
