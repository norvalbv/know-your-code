import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';

export const Topics = () => {
  const [topics, setTopics] = useState([]);

  const [noData, setNoData] = useState(false);

  const fetchdata = async (req, res) => {
    try {
      const data = await fetch(`/topics`);
      const response = await data.json();
      setTopics(response);
      setNoData(false);
    } catch (error) {
      console.error(error);
    }
  };

  const [search, setSearch] = useState('');

  const handleSearchQuestion = (e) => {
    setSearch(e.target.value);
    // handleSearchQuestion(e);
  };

  const handleSearchSubmit = async (e) => {
    if (!search) {
      return fetchdata();
    }
    e.preventDefault();
    try {
      const data = await fetch(`/topics/${search}`);
      const response = await data.json();
      setTopics(response);

      if (response.length === 0) {
        return setNoData(true);
      }
      setNoData(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search Questions"
          value={search}
          onChange={handleSearchQuestion}
          className="trending-questions__search"
        />
      </form>
      <section>
        {noData ? (
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
        )}
      </section>
    </>
  );
};
