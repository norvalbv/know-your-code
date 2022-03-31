import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
//import { useGetAlltopicsQuery } from '../services/questionsApi';

export const Topics = () => {
  const topics = useSelector((state) => state.topics.topics);
  // can be used to render error page or a loading animation

  return (
    <>
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      <SearchQuestions />
      <section className="popular-topics__topics">
        {/* {noData ? (
          <h2>No such topic in our catalogue :(</h2>
        ) : ( */}

        {topics &&
          topics.map((item, i) => (
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
