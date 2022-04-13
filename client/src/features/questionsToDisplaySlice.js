import { createSlice } from '@reduxjs/toolkit';

export const questionsToDisplaySlice = createSlice({
  name: 'questions',
  initialState: {
    questions: [],
    error: false,
    noData: false
  },
  reducers: {
    updateQuestionsToDisplay(state, action) {
      state.questions = action.payload;
    }
  }
});

export const { updateQuestionsToDisplay } = questionsToDisplaySlice.actions;

export default questionsToDisplaySlice.reducer;
