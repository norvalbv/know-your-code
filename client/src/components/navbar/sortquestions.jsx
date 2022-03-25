import '../../styles/navbar/navbar.scss';
import { useState, useContext } from 'react';
import { QuestionType } from '../../app/App';

export const SortQuestions = () => {
  const questiontype = useContext(QuestionType);

  return (
    <>
      <ul className="sort-questions">
        <li
          // onClick={() => setActiveQuestionType('questions')}
          id={questiontype === 'questions' && 'questions'}>
          Questions
        </li>
        <li
          // onClick={() => setActiveQuestionType('syntax')}
          id={questiontype === 'syntax' && 'syntax'}>
          Syntax
        </li>
      </ul>
    </>
  );
};
