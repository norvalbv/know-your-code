import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import SortQuestions from '../components/navbar/sortquestions';
import SearchQuestions from '../components/searchquestions';
import { fetchTopics } from '../features/topicSlice';
import '../styles/pages/topics/topics.scss';

export const Topics = () => {
  const topics = useSelector((state) => state.topics.topics);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('language');
  const [end, setEnd] = useState('full');

  const filter = topics.filter((item) => item.category === selected);
  const filterEnd = filter.filter(
    (item) => item.dev_end === end || item.dev_end === 'full'
  );
  const list = end === 'full' ? filter : filterEnd;

  useEffect(() => {
    setEnd('full');
  }, [selected]);

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
            onClick={() => setSelected('language')}
            style={{
              backgroundColor: selected === 'language' ? 'inherit' : '#e9e9e9'
            }}>
            Programming and languages
          </button>
          <button
            className="topics__cat"
            onClick={() => setSelected('framework')}
            style={{
              backgroundColor: selected === 'framework' ? 'inherit' : '#e9e9e9'
            }}>
            Frameworks
          </button>
          <button className="topics__cat coming-soon">More coming soon</button>
        </div>
        <div className="topics__development-end-container">
          <button
            className={[
              'topics__development-end',
              end === 'full' ? 'selected' : null
            ].join(' ')}
            onClick={() => setEnd('full')}>
            Full Stack
          </button>
          <button
            className={[
              'topics__development-end',
              end === 'front' ? 'selected' : null
            ].join(' ')}
            onClick={() => setEnd('front')}>
            Front End
          </button>
          <button
            className={[
              'topics__development-end',
              'coming-soon',
              end === 'back' ? 'selected' : null
            ].join(' ')}>
            Back End
          </button>
        </div>
        {/* <SearchQuestions /> */}
        {/*  {noData ? (
//   <h2>No such topic in our catalogue :(</h2>
// ) : ( */}
        {topics && (
          <div className="topics__topic-container">
            {list.map((item, i) => (
              <Link to={['/topic/', item.name].join('')} key={i}>
                <button className="topics__topic">{item.name}</button>
              </Link>
            ))}
            {list.length > 0 && (
              <p className="topics__more">More coming soon</p>
            )}
          </div>
        )}
      </section>
    </>
  );
};
