import React from 'react';

const Task80_GraphQL_Subscriptions = () => {
  return (
    <div>
      <h2>Task 80: GraphQL Subscriptions (Conceptual)</h2>
      <div className="description">
        <p>
          While GraphQL Queries are for fetching data and Mutations are for modifying data, <strong>Subscriptions</strong> are a way to maintain a persistent, real-time connection to the server to get notified about specific events. They are GraphQL's answer to real-time data streaming, often implemented over WebSockets.
        </p>

        <h3>How Subscriptions Work</h3>
        <ol>
          <li>
            <strong>Schema Definition (Backend):</strong> In your GraphQL schema, you define a <code>Subscription</code> type. This type defines the events that clients can subscribe to.
            <pre><code>
{`type Subscription {
  commentAdded(postId: ID!): Comment
}`}
            </code></pre>
          </li>
          <li>
            <strong>Subscription Server (Backend):</strong> A standard GraphQL HTTP server cannot handle subscriptions. You need a subscription-aware server (like one built with <code>graphql-ws</code> and Apollo Server) that can manage persistent WebSocket connections.
          </li>
          <li>
            <strong>Client Connection (Frontend):</strong> The Apollo Client on the frontend needs to be configured with a <code>GraphQLWsLink</code> to connect to the server's WebSocket endpoint. This is usually split from the standard HTTP link.
          </li>
          <li>
            <strong>Subscribing (Frontend):</strong> In a React component, you use the <code>useSubscription</code> hook from Apollo Client. You provide it with a GraphQL subscription query.
            <pre><code>
{`const NEW_COMMENT_SUBSCRIPTION = gql\`
  subscription OnCommentAdded($postId: ID!) {
    commentAdded(postId: $postId) {
      id
      text
    }
  }
\`;

function CommentsPage({ postId }) {
  const { data, loading } = useSubscription(
    NEW_COMMENT_SUBSCRIPTION,
    { variables: { postId } }
  );

  // ... render new comments as they arrive in 'data'
}`}
            </code></pre>
          </li>
          <li>
            <strong>Event Trigger (Backend):</strong> Something happens on the backend that should trigger the subscription (e.g., a new comment is saved via a mutation).
          </li>
          <li>
            <strong>Publishing (Backend):</strong> After the event, the backend uses a Pub/Sub system (see Task 66) to "publish" the new data to a specific topic (e.g., <code>COMMENT_ADDED_TOPIC</code>).
          </li>
          <li>
            <strong>Pushing to Client (Backend):</strong> The subscription server, listening to the Pub/Sub topic, receives the new data and pushes it over the WebSocket connection to all clients that are currently subscribed to that specific event (e.g., all clients subscribed to comments for that particular `postId`).
          </li>
          <li>
            <strong>UI Update (Frontend):</strong> The <code>useSubscription</code> hook in the React component receives the new data, triggering a re-render and updating the UI in real-time.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Task80_GraphQL_Subscriptions;
