import { createSlice } from '@reduxjs/toolkit';

const selectedTopic = createSlice({
  name: 'selectedTopic',
  initialState: {
    topic: 'Trending',
    category: null
  },
  reducers: {
    updateSelected(state, action) {
      state.topic = action.payload;
    }
  }
});

export const { updateSelected } = selectedTopic.actions;

export default selectedTopic.reducer;
