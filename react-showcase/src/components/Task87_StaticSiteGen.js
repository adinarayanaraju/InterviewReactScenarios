import React from 'react';

const Task87_StaticSiteGen = () => {
  return (
    <div>
      <h2>Task 87: Static Site Generation (SSG) (Conceptual)</h2>
      <div className="description">
        <p>
          <strong>Static Site Generation (SSG)</strong> is a technique where all the pages of a website are pre-rendered into static HTML files at <strong>build time</strong>. These files can then be served directly from a CDN, making the site incredibly fast and scalable. This approach is perfect for content that doesn't change frequently, such as blogs, marketing sites, and documentation.
        </p>
        <p>
          Frameworks like <strong>Next.js</strong> and <strong>Gatsby</strong> are leaders in this space.
        </p>

        <h3>How SSG Works in Next.js</h3>
        <ol>
          <li>
            <strong>Data Fetching at Build Time:</strong> In your page components, you can export special async functions:
            <ul>
              <li><code>getStaticPaths</code>: This function tells Next.js which dynamic routes to pre-render. For a blog, it would fetch a list of all post slugs (e.g., <code>['post-1', 'post-2']</code>) from a CMS or local Markdown files.</li>
              <li><code>getStaticProps</code>: This function is run for each page at build time. It fetches the data needed for that specific page (e.g., the content for 'post-1').</li>
            </ul>
            <pre><code>
{`// pages/posts/[slug].js
export async function getStaticPaths() {
  const posts = await getAllPostSlugs(); // Fetch all slugs
  const paths = posts.map(post => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug); // Fetch data for one post
  return { props: { postData } };
}`}
            </code></pre>
          </li>
          <li>
            <strong>Pre-rendering:</strong> During the build process (<code>npm run build</code>), Next.js calls these functions, fetches all the data, and renders each page into a static HTML file (e.g., <code>/posts/post-1.html</code>).
          </li>
          <li>
            <strong>Deployment:</strong> The entire output (HTML, CSS, JS) is a set of static files that can be deployed to any static hosting provider or CDN (like Vercel, Netlify, or AWS S3/CloudFront).
          </li>
          <li>
            <strong>Serving:</strong> When a user requests a page, the CDN immediately serves the pre-built HTML file.
          </li>
        </ol>

        <h3>Benefits of SSG</h3>
        <ul>
          <li><strong>Performance:</strong> Blazing fast load times, as there's no server-side computation per request.</li>
          <li><strong>Scalability & Cost:</strong> Serving static files is cheap and scales infinitely with a good CDN.</li>
          <li><strong>Security:</strong> The attack surface is minimal because there's no live database or server-side code execution per request.</li>
        </ul>
        <h3>When to Rebuild?</h3>
        <p>
          Since the site is built statically, what happens when content changes?
        </p>
        <ul>
          <li><strong>Manual Rebuild:</strong> You can manually trigger a new build and deployment.</li>
          <li><strong>Webhooks & CI/CD:</strong> A headless CMS can be configured to trigger a webhook when content is updated. This webhook can trigger a CI/CD pipeline (see Task 89) to automatically rebuild and deploy the site.</li>
          <li><strong>Incremental Static Regeneration (ISR):</strong> A Next.js feature that allows you to re-generate individual static pages in the background after a certain time interval, without needing a full site rebuild.</li>
        </ul>
      </div>
    </div>
  );
};

export default Task87_StaticSiteGen;
