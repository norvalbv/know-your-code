import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/landing/landing.scss';
import { useNavigate } from 'react-router-dom';
import { init } from 'ityped';

const Landing = () => {
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState('');

  const navigate = useNavigate();

  const navigateTo = () => {
    if (search && topic) {
      navigate(`/topic/${topic}?search=${search}`);
    } else if (search && !topic) {
      navigate(`/all-topics/?search=${search}`); // This search will currently produce nothing as no route connected.
    } else if (!search && topic) {
      navigate(`/topic/${topic}`);
    } else {
      return;
    }
  };

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      typeSpeed: 175,
      backSpeed: 125,
      backDelay: 1750,
      showCursor: true,
      strings: ['language', 'framework', 'technology']
    });
  }, []);

  return (
    <div id="landing-page">
      <h1 className="landing-page__header">Know Your Code</h1>
      <p className="landing-page__text">
        Discover your favourite{' '}
        <span ref={textRef} className="landing-page__span"></span>
        <br />
        interview questions and answers or view the basic syntax to make your
        developer life functionable.
      </p>
      <div className="landing-page__input-container">
        <form onSubmit={navigateTo}>
          <select
            onChange={(e) => setTopic(e.target.value)}
            className="landing-page__selection">
            <option defaultChecked hidden>
              Select A Topic
            </option>
            <option value="html">html</option>
            <option value="css">css</option>
          </select>
          <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="landing-page__input"
          />
          <button className="landing-page__button-search">Search</button>
        </form>
      </div>
      <div className="landing-page__browse-container">
        <p className="landing-page__text">Or browse all trending topics</p>
        <Link to="/trending">
          <button className="landing-page__button-trending">
            Browse Trending
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
