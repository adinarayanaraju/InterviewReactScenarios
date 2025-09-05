import React from 'react';

const Task46_ImageOptimization = () => {
  return (
    <div>
      <h2>Task 46: Image Optimization (Conceptual)</h2>
      <div className="description">
        <p>
          Optimizing images is one of the most effective ways to improve web performance. This process typically involves a combination of backend processing, a Content Delivery Network (CDN), and smart frontend loading techniques.
        </p>

        <h3>A Typical Image Optimization Pipeline:</h3>
        <ol>
          <li>
            <strong>Upload to a Storage Service:</strong> The user uploads an original, high-resolution image from the React app. This image is sent to a backend endpoint, which then uploads it to a cloud storage service like Amazon S3 or Google Cloud Storage.
          </li>
          <li>
            <strong>Backend Processing:</strong> A backend service (e.g., an AWS Lambda function triggered by the S3 upload) processes the original image. It performs several actions:
            <ul>
              <li><strong>Resizing:</strong> Creates multiple versions of the image in different sizes (e.g., thumbnail, medium, large).</li>
              <li><strong>Compression:</strong> Compresses each image to reduce file size without significant quality loss.</li>
              <li><strong>Format Conversion:</strong> Converts images to modern, efficient formats like WebP or AVIF.</li>
            </ul>
          </li>
          <li>
            <strong>Delivery via CDN:</strong> The processed images are served to users through a Content Delivery Network (CDN) like Cloudflare or AWS CloudFront. A CDN caches the images at edge locations around the world, ensuring fast delivery to users regardless of their location.
          </li>
        </ol>

        <h3>Frontend Implementation Details</h3>
        <ul>
          <li>
            <strong>Responsive Images with <code>&lt;picture&gt;</code> or <code>srcset</code>:</strong> The React frontend would use the <code>&lt;picture&gt;</code> element or the <code>srcset</code> attribute on an <code>&lt;img&gt;</code> tag to allow the browser to choose the most appropriate image size based on the user's screen resolution and viewport size.
          </li>
          <li>
            <strong>Lazy Loading:</strong> Images that are off-screen (e.g., further down the page) should be "lazy-loaded". This means they are only fetched from the network when the user scrolls them into view. This can be implemented using the native <code>loading="lazy"</code> attribute on the <code>&lt;img&gt;</code> tag or with a library like <code>react-lazyload</code>.
          </li>
        </ul>
        <pre><code>
{`<img
  src="image-small.jpg"
  loading="lazy"
  srcset="image-small.webp 300w,
          image-medium.webp 700w,
          image-large.webp 1200w"
  alt="A descriptive alt text"
/>`}
        </code></pre>
      </div>
    </div>
  );
};

export default Task46_ImageOptimization;
