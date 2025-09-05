import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

// --- Mock API ---
const allPosts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Post Title ${i + 1}`,
  body: `This is the body content for post number ${i + 1}.`,
}));

const fetchPosts = async ({ pageParam = 0 }) => {
  console.log(`Fetching page for infinite scroll: ${pageParam}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  const limit = 5;
  const start = pageParam * limit;
  const end = start + limit;
  const posts = allPosts.slice(start, end);
  return { posts, nextPage: posts.length === limit ? pageParam + 1 : undefined };
};
// --- End Mock API ---

const Task25_InfiniteScroll = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['infinitePosts'],
    queryFn: fetchPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return (
    <div>
      <h2>Task 25: Infinite Scroll with React Query</h2>

      {status === 'pending' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <ul>
            {data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.posts.map(post => (
                  <li key={post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.body}</p>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
          <div className="button-group">
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
            </button>
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
      )}

      <div className="description">
        <p>This component uses React Query's <code>useInfiniteQuery</code> hook to implement infinite scrolling.</p>
        <ul>
          <li><code>useInfiniteQuery</code> is ideal for lists that grow over time.</li>
          <li>It manages the fetching of "pages" of data and stores them in a `data.pages` array.</li>
          <li>The <code>getNextPageParam</code> function is crucial; it tells the hook how to get the parameter for the next page based on the data from the last successful fetch.</li>
          <li>Clicking "Load More" calls the <code>fetchNextPage</code> function, which triggers the next API call. The button is automatically disabled when there's no more data.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task25_InfiniteScroll;
