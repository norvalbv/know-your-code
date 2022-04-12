import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTopics = createAsyncThunk('topics/fetchAll', async () => {
  //const state = getState();
  //let isSyntax = state.questionType.category === 'syntax' ? true : false;
  try {
    const response = await fetch(`http://localhost:5000/topics`);
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
      //console.log(action.payload);
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
