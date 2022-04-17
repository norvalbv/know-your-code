import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchQuestions = createAsyncThunk(
  'questions',
  async (topicId, { getState }) => {
    const state = getState();
    let isSyntax = state.questionType.category === 'syntax' ? true : false;
    try {
      const response = await fetch(`/questions/${topicId}/${isSyntax}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: [],
    error: false,
    status: 'idle',
    noData: false
  },
  reducers: {
    updateQuestions(state, action) {
      console.log(action.payload);
      state.questions = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'success';
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { updateQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
