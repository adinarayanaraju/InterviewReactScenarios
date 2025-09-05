import React from 'react';

// 1. The Error Boundary Component (must be a class component)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // This lifecycle method is called after an error has been thrown by a descendant component.
  // It receives the error that was thrown as a parameter and should return a value to update state.
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  // This lifecycle method is also called after an error has been thrown.
  // It's a good place to log the error to a service.
  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // You could also log the error to an error reporting service like Sentry
    // logErrorToMyService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    // We also need to tell the child to reset its internal state
    if (this.props.onReset) {
      this.props.onReset();
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-fallback">
          <h2>Something went wrong.</h2>
          <p>An error was caught by the Error Boundary.</p>
          <details style={{ whiteSpace: 'pre-wrap', marginBottom: '1rem' }}>
            {this.state.error && this.state.error.toString()}
          </details>
          <button onClick={this.handleReset}>
            Try again
          </button>
        </div>
      );
    }

    // Normally, just render children
    return this.props.children;
  }
}


// 2. A component that might throw an error
class ProblematicChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shouldThrow: false };
    }

    handleClick = () => {
        this.setState({ shouldThrow: true });
    }

    componentDidUpdate() {
        if (this.props.reset) {
            // This is a bit of a hack to reset the child's state from the parent
            // A more robust solution might involve keys or a different state management pattern
            if (this.state.shouldThrow) {
                this.setState({ shouldThrow: false });
            }
        }
    }

    render() {
        if (this.state.shouldThrow) {
            throw new Error('I crashed!');
        }

        return (
            <button onClick={this.handleClick}>
                Click me to throw an error
            </button>
        );
    }
}

// 3. The main component for the task
class Task10_ErrorBoundaries extends React.Component {
    constructor(props) {
        super(props);
        this.state = { resetKey: 0 };
    }

    handleReset = () => {
        this.setState(prevState => ({ resetKey: prevState.resetKey + 1 }));
    }

    render() {
        return (
            <div>
                <h2>Task 10: Error Boundaries</h2>
                <p>Click the button inside the boundary. It will throw an error, which the boundary will catch.</p>

                <div className="boundary-container">
                    <ErrorBoundary onReset={this.handleReset} key={this.state.resetKey}>
                        <ProblematicChild />
                    </ErrorBoundary>
                </div>

                <div className="description">
                    <p>Error Boundaries are components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI.</p>
                    <ul>
                        <li>They must be class components with a `getDerivedStateFromError()` or `componentDidCatch()` method.</li>
                        <li>The `ErrorBoundary` component above wraps the `ProblematicChild`.</li>
                        <li>When the child throws an error, the boundary's state is updated, and it renders the fallback UI instead of crashing the whole app.</li>
                        <li>The "Try again" button in the fallback UI resets the boundary's state, allowing the user to continue. I am using a `key` prop on the ErrorBoundary to force a re-mount of it and its children, which is a common pattern for resetting state.</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Task10_ErrorBoundaries;
