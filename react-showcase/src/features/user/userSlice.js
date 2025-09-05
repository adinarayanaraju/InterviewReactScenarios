import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API function
const fetchUserByIdAPI = async (userId) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  if (userId === '1') {
    return { id: '1', name: 'Test User' };
  } else {
    throw new Error('User not found');
  }
};

// Create the async thunk
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetchUserByIdAPI(userId);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  entity: null,
  loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entity = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
