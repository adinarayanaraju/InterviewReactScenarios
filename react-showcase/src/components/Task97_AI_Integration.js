import React from 'react';

const Task97_AI_Integration = () => {
  return (
    <div>
      <h2>Task 97: AI Integration in React (Conceptual)</h2>
      <div className="description">
        <p>
          Integrating AI features (like those from OpenAI, Cohere, or Google's Gemini) into a React application typically involves making API calls from the backend to the AI provider and then displaying the results on the frontend.
        </p>

        <h3>Why the Backend is Essential</h3>
        <p>
          You should almost never call a generative AI API directly from your React frontend.
        </p>
        <ul>
          <li><strong>Security:</strong> Your API keys for the AI service are secret and must be protected. Exposing them in frontend code would allow anyone to use your key at your expense.</li>
          <li><strong>Cost Control & Rate Limiting:</strong> A backend acts as a gateway where you can implement rate limiting and caching to control how often the expensive AI API is called.</li>
          <li><strong>Prompt Engineering & Data Privacy:</strong> The backend can refine, augment, or sanitize user input before sending it to the AI model. This is crucial for prompt engineering and for stripping out any personally identifiable information (PII).</li>
        </ul>

        <h3>Example Flow: AI-Powered Product Recommendations</h3>
        <ol>
          <li>
            <strong>Frontend Request:</strong> A user is viewing a product. The React component makes an API call to your own backend: <code>GET /api/products/123/recommendations</code>.
          </li>
          <li>
            <strong>Backend Logic:</strong>
            <ul>
              <li>Your backend server receives the request.</li>
              <li>It fetches details about product '123' from your database.</li>
              <li>It constructs a detailed "prompt" for the AI model. For example: <code>"Based on this product (Name: Wireless Mouse, Category: Electronics, Description: ...), generate a list of 3 other complementary products a user might like. Return the response as a JSON array of strings."</code></li>
              <li>The backend makes a secure, server-to-server API call to the AI provider (e.g., OpenAI's API), including its secret API key.</li>
            </ul>
          </li>
          <li>
            <strong>AI Processing:</strong> The AI model processes the prompt and generates the list of recommendations.
          </li>
          <li>
            <strong>Backend Response:</strong> Your backend receives the response from the AI, parses it, and sends a clean JSON array back to your React frontend.
          </li>
          <li>
            <strong>Frontend Render:</strong> The React app receives the list of recommendations and renders them in the UI.
          </li>
        </ol>

        <h3>Handling Streaming Responses</h3>
        <p>
          For features like chatbots or real-time text generation, AI models can "stream" their responses token by token. The backend can handle this by opening a streaming connection to the AI provider and then forwarding those chunks of data to the React frontend, often over a WebSocket or using a streaming HTTP response, allowing the text to appear on the screen word by word.
        </p>
      </div>
    </div>
  );
};

export default Task97_AI_Integration;
