import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// --- Mock API ---
let mockLikes = 10;
let shouldFail = false;

const fetchLikes = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return { likes: mockLikes };
};

const postLike = async (newLikes) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (shouldFail) {
    throw new Error('Failed to update likes on the server!');
  }
  mockLikes = newLikes;
  return { success: true };
};
// --- End Mock API ---


const Task24_OptimisticUI = () => {
  const queryClient = useQueryClient();
  const [failNext, setFailNext] = useState(false);

  // 1. Fetch the initial data
  const { data: post } = useQuery({
    queryKey: ['post-likes'],
    queryFn: fetchLikes
  });

  // 2. Create the mutation with optimistic updates
  const mutation = useMutation({
    mutationFn: postLike,
    // When mutate is called:
    onMutate: async (newLikes) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['post-likes'] });

      // Snapshot the previous value
      const previousPost = queryClient.getQueryData(['post-likes']);

      // Optimistically update to the new value
      queryClient.setQueryData(['post-likes'], { likes: newLikes });

      console.log('Optimistically updated to', newLikes);

      // Return a context object with the snapshotted value
      return { previousPost };
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, newLikes, context) => {
      queryClient.setQueryData(['post-likes'], context.previousPost);
      console.error('Mutation failed, rolling back optimistic update.');
      alert(err.message);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['post-likes'] });
      console.log('Mutation settled, refetching to ensure consistency.');
    },
  });

  const handleLike = () => {
    shouldFail = failNext;
    mutation.mutate((post?.likes ?? 0) + 1);
  };

  return (
    <div>
      <h2>Task 24: Optimistic UI Updates</h2>
      <div className="post-container">
        <h3>A Cool Post</h3>
        <p>This is some content for our post.</p>
        <div className="like-section">
          <strong>Likes: {post?.likes ?? '...'}</strong>
          <button onClick={handleLike} disabled={mutation.isPending}>
            {mutation.isPending ? 'Liking...' : '👍 Like'}
          </button>
        </div>
      </div>

      <div className="button-group">
        <label>
          <input type="checkbox" checked={failNext} onChange={() => setFailNext(!failNext)} />
          Make next API call fail
        </label>
      </div>

      <div className="description">
        <p>An optimistic update makes the UI feel faster by assuming a mutation will succeed and updating the UI immediately, before the server response arrives.</p>
        <ul>
          <li>When you click "Like", the UI updates instantly from 10 to 11.</li>
          <li>If the "fail" checkbox is unchecked, the server call succeeds after a delay.</li>
          <li><strong>To see rollback:</strong> Check the "Make next API call fail" box and click "Like". The UI will update to 12 instantly, but then "roll back" to 11 when the API call fails.</li>
          <li>This is handled by the <code>onMutate</code>, <code>onError</code>, and <code>onSettled</code> options in React Query's <code>useMutation</code> hook.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task24_OptimisticUI;
