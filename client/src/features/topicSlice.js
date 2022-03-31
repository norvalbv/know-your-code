import { createSlice } from '@reduxjs/toolkit';

const topicSlice = createSlice({
  name: 'topic',
  initialState: {
    topics: []
  },
  reducers: {
    updateTopics(state, action) {
      state.topics = action.payload;
    }
  }
});

export const { updateTopics } = topicSlice.actions;

export default topicSlice.reducer;
