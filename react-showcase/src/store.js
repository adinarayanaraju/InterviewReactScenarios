import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice'; // Import the new reducer

// Middleware for simple logging
const loggerMiddleware = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};


// Middleware to save auth state to localStorage
const localStorageMiddleware = store => next => action => {
  const result = next(action);
  if (action.type?.startsWith('auth/')) {
    const authState = store.getState().auth;
    try {
      const serializedState = JSON.stringify({
        user: authState.user,
        token: authState.token,
      });
      localStorage.setItem('authState', serializedState);
    } catch (err) {
      // Ignore write errors.
    }
  }
  return result;
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer, // Add the user reducer to the store
  },
  // Chain all middleware together
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, localStorageMiddleware),
});
