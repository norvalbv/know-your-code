import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestionsToDisplay } from '../features/questionsToDisplaySlice';

export const SearchQuestions = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const questions = useSelector((state) => state.questions.questions);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return dispatch(updateQuestionsToDisplay(questions));
    }

    const filterItems = questions.filter((item) =>
      item.question.toLowerCase().includes(search.toLowerCase())
    );

    console.log(filterItems);

    dispatch(updateQuestionsToDisplay(filterItems));
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search Questions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="trending-questions__search"
      />
    </form>
  );
};
