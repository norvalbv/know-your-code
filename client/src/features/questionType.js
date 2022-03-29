import { createSlice } from '@reduxjs/toolkit';

const questionType = createSlice({
  name: 'questionType',
  initialState: 'questions',
  reducers: {
    toggleType(state, action) {
      if (state === 'questions') {
        return (state = 'syntax');
      } else {
        return (state = 'questions');
      }
    }
  }
});

export const { toggleType } = questionType.actions;

export default questionType.reducer;
