import '../../styles/navbar/navbar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleType } from '../../features/questionType';

export const SortQuestions = () => {
  const dispatch = useDispatch();
  const questionType = useSelector((state) => state.questionType);

  return (
    <>
      <ul className="sort-questions">
        <li
          onClick={() => dispatch(toggleType())}
          id={questionType === 'questions' ? 'questions' : null}>
          Questions
        </li>
        <li
          onClick={() => dispatch(toggleType())}
          id={questionType === 'syntax' ? 'syntax' : null}>
          Syntax
        </li>
      </ul>
    </>
  );
};
