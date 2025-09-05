import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

// GraphQL query to get comments
const GET_COMMENTS = gql`
  query GetProductComments {
    comments {
      id
      text
    }
  }
`;

// GraphQL mutation to add a comment
const ADD_COMMENT = gql`
  mutation AddComment($text: String!) {
    addComment(text: $text) {
      id
      text
    }
  }
`;

const Task48_GraphQL_Mutation = () => {
  const [text, setText] = useState('');
  const { data, loading } = useQuery(GET_COMMENTS);

  const [addComment, { error: mutationError }] = useMutation(ADD_COMMENT, {
    // Optimistic UI update
    optimisticResponse: {
      addComment: {
        id: `temp-id-${Date.now()}`, // Temporary ID
        text: text,
        __typename: 'Comment',
      },
    },
    // Update the cache after the mutation
    update: (cache, { data: { addComment } }) => {
      // Read the current comments from the cache
      const existingData = cache.readQuery({ query: GET_COMMENTS });
      // Write the new comment to the cache
      cache.writeQuery({
        query: GET_COMMENTS,
        data: {
          comments: [...existingData.comments, addComment],
        },
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addComment({ variables: { text } });
    setText('');
  };

  return (
    <div>
      <h2>Task 48: GraphQL Mutation with Optimistic Updates</h2>
      <div className="description">
        <p>This component uses Apollo Client's <code>useMutation</code> hook to modify data and demonstrates an optimistic update.</p>
        <ul>
          <li>When you submit a new comment, it appears in the list instantly, before the server has even responded. This is the "optimistic" part.</li>
          <li>The <code>optimisticResponse</code> option provides temporary data to the UI.</li>
          <li>The <code>update</code> function is then used to formally update the Apollo Client cache with the actual response from the server once it arrives. This replaces the temporary data with the real data.</li>
        </ul>
      </div>

      <h3>Comments Section</h3>
      {loading && <p>Loading comments...</p>}
      <ul>
        {data?.comments.map(comment => (
          <li key={comment.id} style={{ opacity: comment.id.startsWith('temp-') ? 0.5 : 1 }}>
            {comment.text}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a comment..."
          />
        </div>
        <button type="submit">Submit</button>
        {mutationError && <p style={{ color: 'red' }}>Error: {mutationError.message}</p>}
      </form>
    </div>
  );
};

export default Task48_GraphQL_Mutation;
