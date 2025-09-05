import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store';

const queryClient = new QueryClient();

const renderApp = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  );
};

test('renders the main application heading', () => {
  renderApp();
  const headingElement = screen.getByText(/React Concepts Showcase/i);
  expect(headingElement).toBeInTheDocument();
});
