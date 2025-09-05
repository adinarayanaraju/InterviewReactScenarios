import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// --- Mock API ---
// A mock database of posts
const allPosts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Post Title ${i + 1}`,
  body: `This is the body content for post number ${i + 1}.`,
}));

// A mock fetch function that simulates fetching paginated data
const fetchPosts = async (page = 0, limit = 5) => {
  console.log(`Fetching page: ${page}`);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  const start = page * limit;
  const end = start + limit;
  const posts = allPosts.slice(start, end);
  const hasMore = end < allPosts.length;
  return { posts, hasMore };
};
// --- End Mock API ---


const Task22_ReactQuery = () => {
  const [page, setPage] = useState(0);

  const {
    isPending,
    isError,
    error,
    data,
    isFetching, // This is true when a background refetch is happening
  } = useQuery({
    queryKey: ['posts', page], // The query key includes the page number
    queryFn: () => fetchPosts(page),
    // In TanStack Query v5, `keepPreviousData` is placeholderData.
    // This keeps the old data visible while new data is fetched.
    placeholderData: (previousData) => previousData,
  });

  return (
    <div>
      <h2>Task 22: React Query for API Caching & Pagination</h2>

      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <ul>
            {data.posts.map(post => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="button-group">
        <button
          onClick={() => setPage(old => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </button>
        <span> Current Page: {page + 1} </span>
        <button
          onClick={() => {
            if (data?.hasMore) {
              setPage(old => old + 1);
            }
          }}
          disabled={!data?.hasMore}
        >
          Next Page
        </button>
      </div>

      {isFetching ? <div className="spinner">Background fetching...</div> : null}

      <div className="description">
        <p>This component uses React Query's <code>useQuery</code> hook to fetch, cache, and paginate data.</p>
        <ul>
          <li><strong>Caching:</strong> React Query automatically caches the data for each page. If you navigate back to a page you've already visited, the data loads instantly from the cache while a fresh copy is requested in the background.</li>
          <li><strong>Stale-While-Revalidate:</strong> When you click "Next Page", the old data remains visible while the new page's data is fetched. This provides a smoother user experience. The "Background fetching..." indicator shows when this is happening.</li>
          <li>The query key <code>['posts', page]</code> is crucial. It tells React Query to treat each page as a separate query.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task22_ReactQuery;
