import { http, HttpResponse, graphql } from 'msw';
import { factory, oneOf, manyOf, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

// --- Start MSW Data ---
const db = factory({
  item: {
    id: primaryKey(faker.string.uuid),
    name: String,
    category: String,
    price: Number,
  },
});
for (let i = 0; i < 100; i++) {
  db.item.create({
    name: faker.commerce.productName(),
    category: oneOf(faker.commerce.department, ['Electronics', 'Books', 'Home']),
    price: parseFloat(faker.commerce.price()),
  });
}
// --- End MSW Data ---

let requestCount = 0;
const mockProducts = [ { id: 'p1', name: 'Wireless Mouse', price: 25.99, __typename: 'Product' }, /* ... */ ];
let mockComments = [ { id: 'c1', text: 'This is a great product!', __typename: 'Comment' } ];
const mockProfile = { name: 'Jane Doe', email: 'jane.doe@example.com', bio: '...' };

export const handlers = [
  // ... existing handlers
  http.post('/api/login', async ({ request }) => { /* ... */ }),
  http.get('/api/profile', ({ request }) => { /* ... */ }),
  http.post('/api/upload', async ({ request }) => { /* ... */ }),
  http.post('/api/upload-chunk', async ({ request }) => { /* ... */ }),
  http.get('/api/user', () => HttpResponse.json({ firstName: 'John', lastName: 'Maverick' })),
  http.get('/api/posts', ({ request }) => { /* ... */ }),
  http.get('/api/products', () => HttpResponse.json(mockProducts)),
  http.get('/api/items', ({ request }) => { /* ... */ }),

  // New handler for rate limiting
  http.get('/api/rate-limited', () => {
    requestCount++;
    if (requestCount > 3) {
      return new HttpResponse(JSON.stringify({ message: 'Too many requests' }), { status: 429 });
    }
    return HttpResponse.json({ message: `Success! Request #${requestCount}` });
  }),

  // New handler for structured errors
  http.post('/api/structured-error', () => {
    return new HttpResponse(JSON.stringify({
      error: {
        code: 'VALIDATION_FAILED',
        message: 'Email address is already in use.',
        field: 'email',
      }
    }), { status: 400 });
  }),


  // GraphQL Handlers
  graphql.query('GetAllProducts', () => HttpResponse.json({ data: { products: mockProducts } })),
  graphql.query('GetProductComments', () => HttpResponse.json({ data: { comments: mockComments } })),
  graphql.mutation('AddComment', async ({ request }) => { /* ... */ }),
];
