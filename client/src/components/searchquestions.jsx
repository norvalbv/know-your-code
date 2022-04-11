import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, updateQuestions } from '../features/questionsSlice';

export const SearchQuestions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic.topic);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const questions = useSelector((state) => state.questions.questions);

  const handleSearchSubmit = async () => {
    if (!search) {
      return dispatch(fetchQuestions(selectedTopic));
    }

    const filterItems = questions
      .map((item) => item.question)
      .filter(
        (question) =>
          question.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    // let nodata;

    // if (filterItems.length === 0) {
    //   nodata = false;
    //   return dispatch(updateQuestions(filterItems));
    // }
    // nodata = true;
    dispatch(updateQuestions(filterItems));
  };

  useEffect(() => {
    handleSearchSubmit();
  }, [search]);

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
