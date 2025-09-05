import React, { useState } from 'react';
import './App.css';

// Part 1 Imports
import Task1_ControlledForm from './components/Task1_ControlledForm.js';
import Task2_UncontrolledForm from './components/Task2_UncontrolledForm.js';
import Task3_StateLifting from './components/Task3_StateLifting.js';
import Task4_ConditionalRendering from './components/Task4_ConditionalRendering.js';
import Task5_UseEffectCleanup from './components/Task5_UseEffectCleanup.js';
import Task6_ReactMemo from './components/Task6_ReactMemo.js';
import Task7_UseCallback from './components/Task7_UseCallback.js';
import Task8_UseMemo from './components/Task8_UseMemo.js';
import Task9_ContextAPI from './components/Task9_ContextAPI.js';
import Task10_ErrorBoundaries from './components/Task10_ErrorBoundaries.js';
import Task11_KeysInLists from './components/Task11_KeysInLists.js';
import Task12_ControlledVsUncontrolled from './components/Task12_ControlledVsUncontrolled.js';
import Task13_CustomHookLocalStorage from './components/Task13_CustomHookLocalStorage.js';
import Task14_PortalsForModals from './components/Task14_PortalsForModals.js';
import Task15_CodeSplitting from './components/Task15_CodeSplitting.js';
import Task16_Suspense from './components/Task16_Suspense.js';
import Task17_UseReducer from './components/Task17_UseReducer.js';
import Task18_UseRefFocus from './components/Task18_UseRefFocus.js';
import Task19_ForwardingRefs from './components/Task19_ForwardingRefs.js';
import Task20_PerformanceProfiling from './components/Task20_PerformanceProfiling.js';

// Part 2 Imports
import Task21_ReduxToolkit from './components/Task21_ReduxToolkit.js';
import Task22_ReactQuery from './components/Task22_ReactQuery.js';
import Task23_Zustand from './components/Task23_Zustand.js';
import Task24_OptimisticUI from './components/Task24_OptimisticUI.js';
import Task25_InfiniteScroll from './components/Task25_InfiniteScroll.js';
import Task26_Debouncing from './components/Task26_Debouncing.js';
import Task27_SuspenseConcurrent from './components/Task27_SuspenseConcurrent.js';
import Task28_ReduxMiddleware from './components/Task28_ReduxMiddleware.js';
import Task29_VirtualizedList from './components/Task29_VirtualizedList.js';
import Task30_BundleSize from './components/Task30_BundleSize.js';
import Task31_JestUnit from './components/Task31_JestUnit.js';
import Task32_RTL from './components/Task32_RTL.js';
import Task33_CypressE2E from './components/Task33_CypressE2E.js';
import Task34_MockingAPI from './components/Task34_MockingAPI.js';
import Task35_ErrorBoundaryTesting from './components/Task35_ErrorBoundaryTesting.js';
import Task36_AccessibilityTesting from './components/Task36_AccessibilityTesting.js';
import Task37_SnapshotTesting from './components/Task37_SnapshotTesting.js';
import Task38_ReduxThunkTesting from './components/Task38_ReduxThunkTesting.js';
import Task39_PerformanceTesting from './components/Task39_PerformanceTesting.js';
import Task40_CI_CD from './components/Task40_CI_CD.js';


const tasks = {
  'Part 1: React Core Concepts (Q1-20)': {
    '1: Controlled Form': <Task1_ControlledForm />,
    '2: Uncontrolled Form': <Task2_UncontrolledForm />,
    '3: State Lifting': <Task3_StateLifting />,
    '4: Conditional Rendering': <Task4_ConditionalRendering />,
    '5: useEffect w/ Cleanup': <Task5_UseEffectCleanup />,
    '6: React.memo': <Task6_ReactMemo />,
    '7: useCallback': <Task7_UseCallback />,
    '8: useMemo': <Task8_UseMemo />,
    '9: Context API': <Task9_ContextAPI />,
    '10: Error Boundaries': <Task10_ErrorBoundaries />,
    '11: Keys in Lists': <Task11_KeysInLists />,
    '12: Controlled vs Uncontrolled': <Task12_ControlledVsUncontrolled />,
    '13: Custom Hook (localStorage)': <Task13_CustomHookLocalStorage />,
    '14: Portals for Modals': <Task14_PortalsForModals />,
    '15: Code Splitting': <Task15_CodeSplitting />,
    '16: Suspense': <Task16_Suspense />,
    '17: useReducer': <Task17_UseReducer />,
    '18: useRef for Focus': <Task18_UseRefFocus />,
    '19: forwardRef': <Task19_ForwardingRefs />,
    '20: Performance Profiling': <Task20_PerformanceProfiling />,
  },
  'Part 2: State, Performance, Testing (Q21-40)': {
    '21: Redux Toolkit Auth': <Task21_ReduxToolkit />,
    '22: React Query Caching': <Task22_ReactQuery />,
    '23: Zustand Cart': <Task23_Zustand />,
    '24: Optimistic UI': <Task24_OptimisticUI />,
    '25: Infinite Scroll': <Task25_InfiniteScroll />,
    '26: Debouncing': <Task26_Debouncing />,
    '27: Suspense (Conceptual)': <Task27_SuspenseConcurrent />,
    '28: Redux Middleware': <Task28_ReduxMiddleware />,
    '29: Virtualized List': <Task29_VirtualizedList />,
    '30: Bundle Size (Conceptual)': <Task30_BundleSize />,
    '31: Jest Unit Testing': <Task31_JestUnit />,
    '32: React Testing Library': <Task32_RTL />,
    '33: Cypress E2E (Conceptual)': <Task33_CypressE2E />,
    '34: Mocking API (MSW)': <Task34_MockingAPI />,
    '35: Error Boundary Testing': <Task35_ErrorBoundaryTesting />,
    '36: Accessibility Testing': <Task36_AccessibilityTesting />,
    '37: Snapshot Testing': <Task37_SnapshotTesting />,
    '38: Redux Thunk Testing': <Task38_ReduxThunkTesting />,
    '39: Perf Testing (Conceptual)': <Task39_PerformanceTesting />,
    '40: CI/CD (Conceptual)': <Task40_CI_CD />,
  }
};

function App() {
  const [activeTask, setActiveTask] = useState({ group: null, name: null });

  const renderTask = () => {
    if (activeTask.name) {
      const TaskComponent = tasks[activeTask.group][activeTask.name];
      return (
        <div className="task-container">
          <button onClick={() => setActiveTask({ group: null, name: null })} className="back-button">
            &larr; Back to Menu
          </button>
          {TaskComponent}
        </div>
      );
    }
    return (
      <div className="task-menu">
        <h1>React Concepts Showcase</h1>
        <p>Select a task to view the component and its implementation.</p>
        {Object.entries(tasks).map(([groupName, groupTasks]) => (
          <div key={groupName}>
            <h3>{groupName}</h3>
            <ul>
              {Object.keys(groupTasks).map(taskName => (
                <li key={taskName}>
                  <button onClick={() => setActiveTask({ group: groupName, name: taskName })}>
                    {taskName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      {renderTask()}
    </div>
  );
}

export default App;
