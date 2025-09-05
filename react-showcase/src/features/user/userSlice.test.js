import { configureStore } from '@reduxjs/toolkit';
import userReducer, { fetchUserById } from './userSlice';

// We can mock the API module if it were in a separate file.
// For this example, we'll just rely on the mock inside the slice.
// jest.mock('../api/users');

describe('user slice async thunk', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        user: userReducer,
      },
    });
  });

  test('should handle successful user fetch', async () => {
    // Dispatch the thunk with a valid user ID
    await store.dispatch(fetchUserById('1'));

    // Get the final state
    const state = store.getState().user;

    // Assert the final state
    expect(state.loading).toBe('succeeded');
    expect(state.entity).toEqual({ id: '1', name: 'Test User' });
    expect(state.error).toBeNull();
  });

  test('should handle failed user fetch', async () => {
    // Dispatch the thunk with an invalid user ID
    await store.dispatch(fetchUserById('2'));

    const state = store.getState().user;

    // Assert the final state
    expect(state.loading).toBe('failed');
    expect(state.entity).toBeNull();
    expect(state.error).toBe('User not found');
  });
});
