import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';

export const Topics = () => {
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
        ) : (
          topics.map((item, i) => (
            <button
              key={i}
              className="__topic"
              // onClick={() => setSelectedTopic(item.topic)}
            >
              <Link to={item}>{item.topic}</Link>
            </button>
          ))
        )} */}
      </section>
    </>
  );
};
