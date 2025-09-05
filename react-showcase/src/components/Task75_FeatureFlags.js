import React, { useContext, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';

// --- Mock Feature Flag System ---
const mockFlags = {
  newDashboard: true,
  experimentalChat: false,
  darkMode: true,
};

const fetchFlags = async () => {
  console.log('Fetching feature flags...');
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockFlags;
};
// --- End Mock System ---

// 1. Create the Context
const FeatureFlagContext = createContext();

// 2. Create the Provider
const FeatureFlagProvider = ({ children }) => {
  const { data: flags, isLoading } = useQuery({
    queryKey: ['feature-flags'],
    queryFn: fetchFlags,
    staleTime: Infinity, // Flags don't change often, so we can cache them for a long time
  });

  if (isLoading) {
    return <div>Loading Features...</div>;
  }

  return (
    <FeatureFlagContext.Provider value={flags || {}}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

// 3. Create the custom hook
export const useFeatureFlag = (flagName) => {
  const flags = useContext(FeatureFlagContext);
  return flags[flagName] === true;
};

// 4. The UI Component
const DashboardComponent = () => {
  const isNewDashboardEnabled = useFeatureFlag('newDashboard');
  const flags = useContext(FeatureFlagContext);

  return (
    <div>
      <h3>Dashboard</h3>
      {isNewDashboardEnabled ? (
        <button style={{ backgroundColor: '#1a73e8' }}>Go to New Dashboard</button>
      ) : (
        <button disabled>New Dashboard (Coming Soon)</button>
      )}
      <pre style={{marginTop: '1rem'}}><code>{JSON.stringify(flags, null, 2)}</code></pre>
    </div>
  );
};


const Task75_FeatureFlags = () => {
  return (
    <FeatureFlagProvider>
      <div>
        <h2>Task 75: Feature Flags</h2>
        <div className="description">
          <p>
            Feature flags (or feature toggles) are a technique that allows you to turn features of your application on or off without deploying new code.
          </p>
          <ul>
            <li>We simulate fetching a set of flags from a backend.</li>
            <li>A <code>FeatureFlagProvider</code> uses React Query to fetch these flags and provides them to its children via context.</li>
            <li>A custom <code>useFeatureFlag</code> hook provides a clean way for any component to check if a specific flag is enabled.</li>
            <li>The component below uses the hook to conditionally render a "New Dashboard" button based on the <code>newDashboard</code> flag.</li>
          </ul>
        </div>
        <DashboardComponent />
      </div>
    </FeatureFlagProvider>
  );
};

export default Task75_FeatureFlags;
