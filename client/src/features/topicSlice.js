import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTopics = createAsyncThunk('topics/fetchAll', async () => {
  try {
    const response = await fetch(`/topics`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const questionsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: [],
    error: false,
    status: 'idle',
    noData: false
  },
  reducers: {
    updateTopics(state, action) {
      state.questions = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTopics.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.status = 'success';
        state.topics = action.payload;
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { updateTopics } = questionsSlice.actions;

export default questionsSlice.reducer;
