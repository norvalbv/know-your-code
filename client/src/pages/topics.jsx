import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
import { fetchTopics } from '../features/topicSlice';
import '../styles/pages/topics/topics.scss';

export const Topics = () => {
  const topics = useSelector((state) => state.topics.topics);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('');
  const [end, setEnd] = useState(true);

  const handleSelected = (e) => {
    setSelected(e);
  };

  const handleEnd = (e) => {
    setEnd(e);
  };

  const filter = topics.filter((item) => item.category === selected);
  const filterEnd = filter.filter((item) => item.is_frontend === end);
  console.log(filter);

  useEffect(() => {
    dispatch(fetchTopics());
  }, []);

  return (
    <>
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      <h2 className="topics__header">Learn form your favorite topics</h2>
      <p className="topics__text">
        Get to the next level in your development game...
      </p>
      <section className="topics__topics popular-topics__topics">
        <div className="topics__categories">
          <button
            className="topics__cat"
            onClick={() => handleSelected('language')}>
            Programming and languages
          </button>
          <div className="frameworks topics__cat">
            <button
              className="topics__cat"
              onClick={() => handleSelected('framework')}>
              Frameworks
            </button>

            {selected === 'framework' && (
              <div className="topics__end-container">
                <button className="topics__end coming-soon"> Full Stack</button>
                <button className="topics__end" onClick={() => handleEnd(true)}>
                  Front End
                </button>
                <button className="topics__end coming-soon">Back End</button>
              </div>
            )}
          </div>
          <button className="topics__cat coming-soon">More coming soon</button>
        </div>
        {/* <SearchQuestions /> */}
        {/*  {noData ? (
//   <h2>No such topic in our catalogue :(</h2>
// ) : ( */}
        {topics && (
          <div className="topics__topic-container">
            {filterEnd.map((item, i) => (
              <Link to={['/topic/', item.name].join('')} key={i}>
                <button className="topics__topic">{item.name}</button>
              </Link>
            ))}
            {filterEnd.length > 0 && (
              <p className="topics__more">More coming soon</p>
            )}
          </div>
        )}
      </section>
    </>
  );
};
