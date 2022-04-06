import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
  name: 'question',
  initialState: {
    questions: []
  },
  reducers: {
    updateQuestions(state, action) {
      console.log(action);
      state.questions = action.payload;
    }
  }
});

export const { updateQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
