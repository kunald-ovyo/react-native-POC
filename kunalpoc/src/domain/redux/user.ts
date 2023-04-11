import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  return response;
});
// Slice
const slice = createSlice({
  name: 'user',
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
        const newEntities = {};
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
