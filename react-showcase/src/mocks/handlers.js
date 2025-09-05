import { http, HttpResponse } from 'msw';

// Define handlers for your mocked API endpoints.
export const handlers = [
  // A mock for getting the current user.
  http.get('/api/user', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),

  // A mock for the posts API used in previous examples.
  http.get('/api/posts', ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 0;

    const allPosts = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      title: `Mocked Post Title ${i + 1}`,
    }));

    const limit = 5;
    const start = Number(page) * limit;
    const end = start + limit;
    const posts = allPosts.slice(start, end);
    const hasMore = end < allPosts.length;

    return HttpResponse.json({ posts, hasMore });
  }),
];
