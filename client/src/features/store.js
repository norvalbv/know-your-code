import { configureStore } from '@reduxjs/toolkit';
import questionTypeReducer from './questionTypeSlice';
import topicReducer from './topicSlice';
import questionsReducer from './questionsSlice';
import selectedTopicReducer from './selectedTopicSlice';
import questionsToDisplayReducer from './questionsToDisplaySlice';

export const store = configureStore({
  reducer: {
    questionType: questionTypeReducer,
    topics: topicReducer,
    questions: questionsReducer,
    selectedTopic: selectedTopicReducer,
    questionsToDisplay: questionsToDisplayReducer
  }
});
