import { configureStore } from '@reduxjs/toolkit';
import questionTypeReducer from './questionTypeSlice';
import topicReducer from './topicSlice';
import questionsReducer from './questionsSlice';
import { questionsApi } from '../services/questionsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    questionType: questionTypeReducer,
    topics: topicReducer,
    questions: questionsReducer,
    [questionsApi.reducerPath]: questionsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware)
});

setupListeners(store.dispatch);
