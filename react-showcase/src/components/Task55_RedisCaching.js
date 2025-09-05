import React from 'react';

const Task55_RedisCaching = () => {
  return (
    <div>
      <h2>Task 55: Caching API Responses with Redis (Conceptual)</h2>
      <div className="description">
        <p>
          For frequently accessed data that doesn't change often, or for queries that are computationally expensive, hitting the main database every time can be inefficient. Caching is the process of storing a copy of this data in a temporary, fast-access storage like Redis. This is a backend optimization.
        </p>

        <h3>How it Works: The Cache-Aside Pattern</h3>
        <ol>
          <li>
            <strong>Frontend Request:</strong> The React app requests data, e.g., <code>GET /api/users/123/profile</code>.
          </li>
          <li>
            <strong>Check the Cache:</strong> The backend server first checks if the data for this request (e.g., for key <code>user:123:profile</code>) exists in the Redis cache.
          </li>
          <li>
            <strong>Cache Hit:</strong> If the data is found in Redis (a "cache hit"), the backend immediately returns the cached data to the frontend. This is very fast as it avoids a database query.
          </li>
          <li>
            <strong>Cache Miss:</strong> If the data is not in Redis (a "cache miss"), the backend proceeds to query the main database (e.g., PostgreSQL or MongoDB).
          </li>
          <li>
            <strong>Store in Cache:</strong> After retrieving the data from the database, the backend stores a copy of it in the Redis cache with an expiration time (e.g., 5 minutes). It then returns the data to the frontend.
          </li>
          <li>Subsequent requests for the same data within the expiration window will result in a cache hit.</li>
        </ol>

        <h3>Cache Invalidation</h3>
        <p>
          The hardest part of caching is knowing when to invalidate (or delete) the cache. If the underlying data changes, the cache becomes stale.
        </p>
        <ul>
          <li><strong>Time-To-Live (TTL):</strong> The simplest method is to set an expiration time (TTL) on the cache key. After the TTL expires, the cache entry is automatically deleted. This is good for data that can be slightly out of date.</li>
          <li><strong>Write-Through/Write-Around Caching:</strong> When data is updated (e.g., a user updates their profile with a <code>PUT</code> request), the backend is responsible for explicitly deleting the corresponding cache key (<code>user:123:profile</code>) from Redis. The next read request will then be a cache miss, forcing a fetch of the fresh data from the database, which then repopulates the cache.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task55_RedisCaching;
