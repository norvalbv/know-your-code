import '../../styles/navbar/navbar.scss';
import { useContext } from 'react';
import { SelectedQuestionType } from '../../context/selectedquestion';
export const SortQuestions = () => {
  const selectedquestiontype = useContext(SelectedQuestionType);

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
    </>
  );
};
