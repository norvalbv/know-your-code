import { useEffect, useState } from 'react';
import NavBar from '../components/navbar/navbar';
import '../styles/popularquestions.scss';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
import { ViewQuestions } from '../components/viewquestions';
import { getQuestions } from '../features/questions';

const PopularQuestions = () => {
  const [selectedTopic, setSelectedTopic] = useState('trending');
  const [topics, setTopics] = useState([]);

  const getTopic = async (req, res) => {
    try {
      const data = await fetch(`/topics`);
      const response = await data.json();
      setTopics(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTopic();
  }, []);

  return (
    <section className="popular-topics__container">
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      <div className="popular-topics__topics">
        <h2>Popular Topics</h2>
        {topics.map((item, i) => (
          <button
            key={i}
            className="__topic"
            onClick={() => setSelectedTopic(item.topic)}>
            {item.topic}
          </button>
        ))}
      </div>
      <div className="trending-questions__container">
        {/* <SearchQuestions /> */}
        <div className="questions">
          <h2>Trending Questions</h2>
          <ViewQuestions selectedTopic={selectedTopic} />
        </div>
      </div>
    </section>
  );
};

export default PopularQuestions;
