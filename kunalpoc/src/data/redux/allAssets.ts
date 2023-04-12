import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'allAssets/fetchAllAssets',
  async (userId: number, thunkApi) => {
    console.log('checking fetching async number ', userId);
    thunkApi.dispatch(loginSuccess(false));
    const response = await fetch('https://api.adviceslip.com/advice');
    return response;
  },
);
// Slice
const slice = createSlice({
  name: 'allAssets',
  initialState: {
    user: null,
    status: '',
    entities: [],
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log('Working on ', action.payload);
        state.status = 'idle';
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log('Working on ', action.payload);
        state.status = 'idle';
      });
  },
});

// Actions
export const {loginSuccess, logoutSuccess} = slice.actions;

export default slice.reducer;
