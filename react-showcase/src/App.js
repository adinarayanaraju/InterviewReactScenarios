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

// Part 3, 4, 5 Imports
import Task41_REST_API from './components/Task41_REST_API.js';
import Task42_JWT_Auth from './components/Task42_JWT_Auth.js';
import Task43_RBAC from './components/Task43_RBAC.js';
import Task44_FileUploads from './components/Task44_FileUploads.js';
import Task45_FileChunking from './components/Task45_FileChunking.js';
import Task46_ImageOptimization from './components/Task46_ImageOptimization.js';
import Task47_GraphQL_Query from './components/Task47_GraphQL_Query.js';
import Task48_GraphQL_Mutation from './components/Task48_GraphQL_Mutation.js';
import Task49_MongoDB from './components/Task49_MongoDB.js';
import Task50_PostgreSQL from './components/Task50_PostgreSQL.js';
import Task51_Pagination from './components/Task51_Pagination.js';
import Task52_SortingFiltering from './components/Task52_SortingFiltering.js';
import Task53_PasswordStorage from './components/Task53_PasswordStorage.js';
import Task54_RateLimiting from './components/Task54_RateLimiting.js';
import Task55_RedisCaching from './components/Task55_RedisCaching.js';
import Task56_Webhooks from './components/Task56_Webhooks.js';
import Task57_EnvConfig from './components/Task57_EnvConfig.js';
import Task58_ErrorMiddleware from './components/Task58_ErrorMiddleware.js';
import Task59_LoggingMonitoring from './components/Task59_LoggingMonitoring.js';
import Task60_CORS from './components/Task60_CORS.js';
import Task61_WebSocketsChat from './components/Task61_WebSocketsChat.js';
import Task62_RealTimeNotifications from './components/Task62_RealTimeNotifications.js';
import Task63_LiveDashboard from './components/Task63_LiveDashboard.js';
import Task64_PresenceDetection from './components/Task64_PresenceDetection.js';
import Task65_OptimisticWebSockets from './components/Task65_OptimisticWebSockets.js';
import Task66_PubSub from './components/Task66_PubSub.js';
import Task67_TypingIndicator from './components/Task67_TypingIndicator.js';
import Task68_CSRF from './components/Task68_CSRF.js';
import Task69_XSS from './components/Task69_XSS.js';
import Task70_JWT_Expiry from './components/Task70_JWT_Expiry.js';
import Task71_CSP from './components/Task71_CSP.js';
import Task72_DDoS from './components/Task72_DDoS.js';
import Task73_GDPR from './components/Task73_GDPR.js';
import Task74_MultiTenancy from './components/Task74_MultiTenancy.js';
import Task75_FeatureFlags from './components/Task75_FeatureFlags.js';
import Task76_APIRetry from './components/Task76_APIRetry.js';
import Task77_WebWorkers from './components/Task77_WebWorkers.js';
import Task78_ServiceWorkers from './components/Task78_ServiceWorkers.js';
import Task79_PWA from './components/Task79_PWA.js';
import Task80_GraphQL_Subscriptions from './components/Task80_GraphQL_Subscriptions.js';
import Task81_EcommCartSystem from './components/Task81_EcommCartSystem.js';
import Task82_CheckoutFlow from './components/Task82_CheckoutFlow.js';
import Task83_MultiStepForm from './components/Task83_MultiStepForm.js';
import Task84_AdminDashboard from './components/Task84_AdminDashboard.js';
import Task85_MicroFrontends from './components/Task85_MicroFrontends.js';
import Task86_SSR_NextJS from './components/Task86_SSR_NextJS.js';
import Task87_StaticSiteGen from './components/Task87_StaticSiteGen.js';
import Task88_BFF from './components/Task88_BFF.js';
import Task89_CI_CD_Deploy from './components/Task89_CI_CD_Deploy.js';
import Task90_Kubernetes from './components/Task90_Kubernetes.js';
import Task91_LoggingProd from './components/Task91_LoggingProd.js';
import Task92_CachingStrategy from './components/Task92_CachingStrategy.js';
import Task93_i18n from './components/Task93_i18n.js';
import Task94_Serverless from './components/Task94_Serverless.js';
import Task95_EdgeComputing from './components/Task95_EdgeComputing.js';
import Task96_RealTimeAnalytics from './components/Task96_RealTimeAnalytics.js';
import Task97_AI_Integration from './components/Task97_AI_Integration.js';
import Task98_BlockchainWallet from './components/Task98_BlockchainWallet.js';
import Task99_FaceVerification from './components/Task99_FaceVerification.js';
import Task100_SystemDesign from './components/Task100_SystemDesign.js';


const tasks = {
  'Part 1: React Core Concepts (Q1-20)': {
    '1: Controlled Form': <Task1_ControlledForm />, '2: Uncontrolled Form': <Task2_UncontrolledForm />, '3: State Lifting': <Task3_StateLifting />, '4: Conditional Rendering': <Task4_ConditionalRendering />, '5: useEffect w/ Cleanup': <Task5_UseEffectCleanup />, '6: React.memo': <Task6_ReactMemo />, '7: useCallback': <Task7_UseCallback />, '8: useMemo': <Task8_UseMemo />, '9: Context API': <Task9_ContextAPI />, '10: Error Boundaries': <Task10_ErrorBoundaries />, '11: Keys in Lists': <Task11_KeysInLists />, '12: Controlled vs Uncontrolled': <Task12_ControlledVsUncontrolled />, '13: Custom Hook (localStorage)': <Task13_CustomHookLocalStorage />, '14: Portals for Modals': <Task14_PortalsForModals />, '15: Code Splitting': <Task15_CodeSplitting />, '16: Suspense': <Task16_Suspense />, '17: useReducer': <Task17_UseReducer />, '18: useRef for Focus': <Task18_UseRefFocus />, '19: forwardRef': <Task19_ForwardingRefs />, '20: Performance Profiling': <Task20_PerformanceProfiling />,
  },
  'Part 2: State, Performance, Testing (Q21-40)': {
    '21: Redux Toolkit Auth': <Task21_ReduxToolkit />, '22: React Query Caching': <Task22_ReactQuery />, '23: Zustand Cart': <Task23_Zustand />, '24: Optimistic UI': <Task24_OptimisticUI />, '25: Infinite Scroll': <Task25_InfiniteScroll />, '26: Debouncing': <Task26_Debouncing />, '27: Suspense (Conceptual)': <Task27_SuspenseConcurrent />, '28: Redux Middleware': <Task28_ReduxMiddleware />, '29: Virtualized List': <Task29_VirtualizedList />, '30: Bundle Size (Conceptual)': <Task30_BundleSize />, '31: Jest Unit Testing': <Task31_JestUnit />, '32: React Testing Library': <Task32_RTL />, '33: Cypress E2E (Conceptual)': <Task33_CypressE2E />, '34: Mocking API (MSW)': <Task34_MockingAPI />, '35: Error Boundary Testing': <Task35_ErrorBoundaryTesting />, '36: Accessibility Testing': <Task36_AccessibilityTesting />, '37: Snapshot Testing': <Task37_SnapshotTesting />, '38: Redux Thunk Testing': <Task38_ReduxThunkTesting />, '39: Perf Testing (Conceptual)': <Task39_PerformanceTesting />, '40: CI/CD (Conceptual)': <Task40_CI_CD />,
  },
  'Part 3: Full-Stack API, Auth, Database (Q41-60)': {
    '41: REST API Integration': <Task41_REST_API />, '42: JWT Auth': <Task42_JWT_Auth />, '43: Role-Based Access': <Task43_RBAC />, '44: File Uploads': <Task44_FileUploads />, '45: File Chunking': <Task45_FileChunking />, '46: Image Opt (Conceptual)': <Task46_ImageOptimization />, '47: GraphQL Query': <Task47_GraphQL_Query />, '48: GraphQL Mutation': <Task48_GraphQL_Mutation />, '49: MongoDB (Conceptual)': <Task49_MongoDB />, '50: PostgreSQL (Conceptual)': <Task50_PostgreSQL />, '51: Pagination': <Task51_Pagination />, '52: Sorting & Filtering': <Task52_SortingFiltering />, '53: Passwords (Conceptual)': <Task53_PasswordStorage />, '54: Rate Limiting': <Task54_RateLimiting />, '55: Redis (Conceptual)': <Task55_RedisCaching />, '56: Webhooks (Conceptual)': <Task56_Webhooks />, '57: Env Config (Conceptual)': <Task57_EnvConfig />, '58: Error Middleware': <Task58_ErrorMiddleware />, '59: Logging (Conceptual)': <Task59_LoggingMonitoring />, '60: CORS (Conceptual)': <Task60_CORS />,
  },
  'Part 4: Real-Time, Scaling, Security (Q61-80)': {
    '61: WebSockets (Conceptual)': <Task61_WebSocketsChat />, '62: Notifications (Conceptual)': <Task62_RealTimeNotifications />, '63: Live Dashboard (Conceptual)': <Task63_LiveDashboard />, '64: Presence (Conceptual)': <Task64_PresenceDetection />, '65: Optimistic WS (Conceptual)': <Task65_OptimisticWebSockets />, '66: Pub/Sub (Conceptual)': <Task66_PubSub />, '67: Typing Indicator (Conceptual)': <Task67_TypingIndicator />, '68: CSRF (Conceptual)': <Task68_CSRF />, '69: XSS Protection': <Task69_XSS />, '70: JWT Expiry': <Task70_JWT_Expiry />, '71: CSP (Conceptual)': <Task71_CSP />, '72: DDoS (Conceptual)': <Task72_DDoS />, '73: GDPR Compliance': <Task73_GDPR />, '74: Multi-Tenancy (Conceptual)': <Task74_MultiTenancy />, '75: Feature Flags': <Task75_FeatureFlags />, '76: API Retry Logic': <Task76_APIRetry />, '77: Web Workers': <Task77_WebWorkers />, '78: Service Workers (Conceptual)': <Task78_ServiceWorkers />, '79: PWA (Conceptual)': <Task79_PWA />, '80: GraphQL Subs (Conceptual)': <Task80_GraphQL_Subscriptions />,
  },
  'Part 5: System Design & Deep Tasks (Q81-100)': {
    '81: E-comm Cart (Conceptual)': <Task81_EcommCartSystem />, '82: Checkout (Conceptual)': <Task82_CheckoutFlow />, '83: Multi-Step Form (Conceptual)': <Task83_MultiStepForm />, '84: Admin Dashboard (Conceptual)': <Task84_AdminDashboard />, '85: Micro-Frontends (Conceptual)': <Task85_MicroFrontends />, '86: SSR (Conceptual)': <Task86_SSR_NextJS />, '87: SSG (Conceptual)': <Task87_StaticSiteGen />, '88: BFF (Conceptual)': <Task88_BFF />, '89: CI/CD Deploy (Conceptual)': <Task89_CI_CD_Deploy />, '90: Kubernetes (Conceptual)': <Task90_Kubernetes />, '91: Prod Logging (Conceptual)': <Task91_LoggingProd />, '92: Caching (Conceptual)': <Task92_CachingStrategy />, '93: i18n (Conceptual)': <Task93_i18n />, '94: Serverless (Conceptual)': <Task94_Serverless />, '95: Edge Computing (Conceptual)': <Task95_EdgeComputing />, '96: Real-Time Analytics (Conceptual)': <Task96_RealTimeAnalytics />, '97: AI Integration (Conceptual)': <Task97_AI_Integration />, '98: Blockchain (Conceptual)': <Task98_BlockchainWallet />, '99: Face Verification (Conceptual)': <Task99_FaceVerification />, '100: Full System Design (Conceptual)': <Task100_SystemDesign />,
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
