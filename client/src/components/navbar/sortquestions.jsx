import '../../styles/navbar/navbar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateQType } from '../../features/questionTypeSlice';

export const SortQuestions = () => {
  const dispatch = useDispatch();
  const questionType = useSelector((state) => state.questionType);

  return (
    <>
      <ul className="sort-questions">
        <li
          onClick={() => dispatch(updateQType('questions'))}
          id={questionType.category === 'questions' ? 'questions' : null}>
          Questions
        </li>
        <li
          onClick={() => dispatch(updateQType('syntax'))}
          id={questionType.category === 'syntax' ? 'syntax' : null}>
          Syntax
        </li>
      </ul>
    </>
  );
};
