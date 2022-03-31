import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/*export const getQuestions = createAsyncThunk(
  'loadQuestions',
  async (selectedTopic, { getState }) => {
    const questionType = getState();
    try {
      const data = await fetch(
        `/${selectedTopic.toLowerCase()}/all/${questionType.category}`
      );

      const response = await data.json();
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);*/

export const questionsSlice = createSlice({
  name: 'question',
  initialState: {
    topics: [],
    status: null
  }
  /* extraReducers: {
    [getQuestions.pending]: (state, action) => {
      state.isLoading = true;
      state.status = 'pending';
    },
    [getQuestions.fulfilled]: (state, action) => {
      state.topics = action.payload;
      state.isLoading = false;
      state.hasError = 'fulfilled';
    },
    [getQuestions.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = 'rejected';
    }
  }*/
});

export default questionsSlice.reducer;
