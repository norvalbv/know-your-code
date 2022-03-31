import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
//import { getTopics } from '../features/topicSlice';

export const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getTopics());
  }, []);

  const topics = useSelector((state) => state.topics);

  return (
    <>
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      <SearchQuestions />
      <section>
        {/* {noData ? (
          <h2>No such topic in our catalogue :(</h2>
        ) : ( */}
        {topics.topics.map((item, i) => (
          <button
            key={i}
            className="__topic"
            // onClick={() => setSelectedTopic(item.topic)}
          >
            <Link to={item}>{item.topic}</Link>
          </button>
        ))}
        {/* } */}
      </section>
    </>
  );
};
