import { configureStore } from '@reduxjs/toolkit';
import questionTypeReducer from './questionType';
import topicReducer from './topic';
import questionsReducer from './questions';

export const store = configureStore({
  reducer: {
    questionType: questionTypeReducer,
    topics: topicReducer,
    questions: questionsReducer
  }
});
