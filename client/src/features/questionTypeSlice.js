import { createSlice } from '@reduxjs/toolkit';

const questionType = createSlice({
  name: 'questionType',
  initialState: {
    category: 'questions'
  },
  reducers: {
    updateQType(state, action) {
      state.category = action.payload;
    }
  }
});

export const { updateQType } = questionType.actions;

export default questionType.reducer;
