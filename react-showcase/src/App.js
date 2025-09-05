import React, { useState } from 'react';
import './App.css';

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

const tasks = {
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
};

function App() {
  const [activeTask, setActiveTask] = useState(null);

  const renderTask = () => {
    if (activeTask) {
      return (
        <div className="task-container">
          <button onClick={() => setActiveTask(null)} className="back-button">
            &larr; Back to Menu
          </button>
          {tasks[activeTask]}
        </div>
      );
    }
    return (
      <div className="task-menu">
        <h1>React Concepts Showcase</h1>
        <p>Select a task to view the component and its implementation.</p>
        <ul>
          {Object.keys(tasks).map(taskName => (
            <li key={taskName}>
              <button onClick={() => setActiveTask(taskName)}>
                {taskName}
              </button>
            </li>
          ))}
        </ul>
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
