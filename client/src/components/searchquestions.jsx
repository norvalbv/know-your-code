import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { questionsApi } from '../services/questionsApi';
// { useDebounce } from 'use-debounce';
//import { getQuestions } from '../features/questionsSlice';

// eslint-disable-next-line react/prop-types
export const SearchQuestions = () => {
  // const [debounceValue] = useDebounce(search, 500);
  const selectedTopic = useSelector((state) => state.selectedTopic.topic);
  const [search, setSearch] = useState('');
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //const dispatch = useDispatch();

  // const questiontype = useSelector((state) => state.questionType);
  //const{data, isFetching, error}= questionsApi.endpoints.

  const handleSearchSubmit = async (e) => {
    //if (!search) {
    //  return dispatch(getQuestions(selectedTopic));
    // }
    e.preventDefault();
    // try {
    //  const data = await fetch(
    //   `/${selectedTopic}/search/${questiontype}/${search}`
    // );
    //const response = await data.json();
    // dispatch(getQuestions());
    //   if (response.length === 0) {
    //     return setNoData(true);
    //   }
    //   setNoData(false);
    // } catch (error) {
    // console.error(error);
    //}
  };
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search Questions"
        value={search}
        onChange={handleSearchChange}
        className="trending-questions__search"
      />
    </form>
  );
};
