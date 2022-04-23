import { configureStore } from '@reduxjs/toolkit';
import questionTypeReducer from '../features/questionTypeSlice';
import topicReducer from '../features/topicSlice';
import questionsReducer from '../features/questionsSlice';
import selectedTopicReducer from '../features/selectedTopicSlice';

export const store = configureStore({
  reducer: {
    questionType: questionTypeReducer,
    topics: topicReducer,
    questions: questionsReducer,
    selectedTopic: selectedTopicReducer
  }
});
