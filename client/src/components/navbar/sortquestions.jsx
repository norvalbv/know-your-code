import '../../styles/navbar/navbar.scss';
import { useDispatch } from 'react-redux';
import { updateQType } from '../../features/questionTypeSlice';

export const SortQuestions = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ul className="sort-questions">
        <li onClick={() => dispatch(updateQType('questions'))}>Questions</li>
        <li onClick={() => dispatch(updateQType('syntax'))}> Syntax</li>
      </ul>
    </>
  );
};
