import { configureStore } from '@reduxjs/toolkit';
import questionTypeReducer from '../features/questionTypeSlice';
import topicReducer from '../features/topicSlice';
import questionsReducer from '../features/questionsSlice';
import selectedTopicReducer from '../features/selectedTopicSlice';
import chosenQuestionListReducer from '../features/chosenQuestionList';
import userReducer from '../features/userslice';

export const store = configureStore({
  reducer: {
    chosenQuestionList: chosenQuestionListReducer,
    questionType: questionTypeReducer,
    topics: topicReducer,
    questions: questionsReducer,
    selectedTopic: selectedTopicReducer,
    user: userReducer
  }
});
