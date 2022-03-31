import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/*export const getTopics = createAsyncThunk('loadTopics', async () => {
  try {
    const data = await fetch(`/topics`);
    const response = await data.json();
    return response;
  } catch (error) {
    console.error(error);
  }
});*/

const topicSlice = createSlice({
  name: 'topic',
  initialState: {
    topics: []
    //isLoading: false,
    //hasError: false
    // emptyResults: false
  }
  /*extraReducers: {
    [getTopics.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getTopics.fulfilled]: (state, action) => {
      state.topics = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [getTopics.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }*/
});

export default topicSlice.reducer;
