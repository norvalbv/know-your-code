import { createSlice } from '@reduxjs/toolkit';

const chosenQuestionListSlice = createSlice({
  name: 'chosenQuestionList',
  initialState: {
    questions: []
  },
  reducers: {
    addQuestion(state, action) {
      const find = state.questions.some(
        (item) => item.id === action.payload.id
      );
      if (!find) {
        state.questions.push(action.payload);
      }
    },
    removeQuestion(state, action) {
      state.questions.splice(
        state.questions.indexOf(
          state.questions.find((item) => item.id === action.payload.id)
        ),
        1
      );
    }
  }
});

export const { addQuestion, removeQuestion } = chosenQuestionListSlice.actions;

export default chosenQuestionListSlice.reducer;
