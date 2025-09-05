import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApolloProvider } from '@apollo/client';
import { client as apolloClient } from './apollo-client';
import { store } from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// MSW Setup
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}


// Create a client for React Query
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
