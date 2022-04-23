import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResult, updateQuestions } from '../features/questionsSlice';

const SearchQuestions = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const { questionsFetched } = useSelector((state) => state.questions);

  const handleSearchSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    const filterItems = questionsFetched.filter((item) =>
      item.question.toLowerCase().includes(search.toLowerCase())
    );
    if (filterItems.length === 0) {
      dispatch(setResult(true));
    } else {
      dispatch(setResult(false));
      dispatch(updateQuestions(filterItems));
    }
  };

  useEffect(() => {
    handleSearchSubmit();
  }, [search]);

  console.log('search q');
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

export default React.memo(SearchQuestions);
