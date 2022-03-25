import '../../styles/navbar/navbar.scss';
import { useState, useContext } from 'react';
import { SelectedQuestionType } from '../../context/selectedquestion';
export const SortQuestions = () => {
  const selectedquestiontype = useContext(SelectedQuestionType);

  setTimeout(() => {
    console.log(selectedquestiontype.type);
  }, 5000);

  return (
    <>
      <ul className="sort-questions">
        <li
          onClick={selectedquestiontype.toggleQuestionType}
          id={selectedquestiontype.type === 'questions' ? 'questions' : null}>
          Questions
        </li>
        <li
          onClick={selectedquestiontype.toggleQuestionType}
          id={selectedquestiontype.type === 'syntax' ? 'syntax' : null}>
          Syntax
        </li>
      </ul>
      {/* <button onClick={selectedquestiontype.toggleQuestionType}>
        la0sdi ashidahsid hasg hiasd
      </button> */}
    </>
  );
};
