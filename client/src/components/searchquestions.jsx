import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestions } from '../features/questionsSlice';
import { useLoadQuestionsQuery } from '../services/questionsApi';

export const SearchQuestions = ({ topic, questiontype, questions }) => {
  const selectedTopic = useSelector((state) => state.selectedTopic.topic);
  const questionType = useSelector((state) => state.questionType.category);
  const string = `${selectedTopic.toLowerCase()}/all/${questionType}`;

  const { data } = useLoadQuestionsQuery(string);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleSearchSubmit = async (e) => {
    // if (!search) {
    //   return useLoadQuestionsQuery(string);
    // }
    // e.preventDefault();

    const filterItems = data
      .map((item) => item.question)
      .filter(
        (question) =>
          question.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );

    console.log(filterItems);
    dispatch(updateQuestions(filterItems));

    // old code

    // const data = await fetch(
    //   `/${selectedTopic}/search/${questiontype}/${search}`
    // );
    // const response = await data.json();
    // dispatch(getQuestions());
  };

  useEffect(() => {
    handleSearchSubmit();
  }, [search]); // updated state every search
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
