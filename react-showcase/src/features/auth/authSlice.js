import { createSlice } from '@reduxjs/toolkit';

// Function to get initial state from localStorage
const getInitialState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return { user: null, token: null, isAuthenticated: false };
    }
    const authState = JSON.parse(serializedState);
    return { ...authState, isAuthenticated: !!authState.token };
  } catch (err) {
    return { user: null, token: null, isAuthenticated: false };
  }
};

const initialState = getInitialState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
