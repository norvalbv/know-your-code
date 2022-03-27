import React, { useContext, useEffect, useState } from 'react';
// import { SearchQuestions } from "../components/searchquestions";
import NavBar from '../components/navbar/navbar';
import '../styles/popularquestions.scss';
import { useDebounce } from 'use-debounce';
import { SelectedQuestionType } from '../context/selectedquestion';
import { SortQuestions } from '../components/navbar/sortquestions';

const PopularQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('trending');
  const [selectedQuestion, setSelectedQuestion] = useState(false);
  const [topics, setTopics] = useState([]);
  const [search, setSearch] = useState('');

  const questiontype = useContext(SelectedQuestionType);

  const getPopularQuestions = async () => {
    try {
      const data = await fetch(
        `/${selectedTopic.toLowerCase()}/all/${questiontype.type}`
      );

      const response = await data.json();
      setQuestions(response);
      setSelectedQuestion(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getTopics = async () => {
    try {
      const data = await fetch(`/topics`);
      const response = await data.json();
      setTopics(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTopics();
  }, []);

  useEffect(() => {
    getPopularQuestions();
  }, [selectedTopic]);

  // const [debounceValue] = useDebounce(search, 500);

  const [noData, setNoData] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    // handleSearchQuestion(e);
  };

  const handleSearchSubmit = async (e) => {
    if (!search) {
      return getPopularQuestions();
    }
    e.preventDefault();
    try {
      const data = await fetch(
        `/${selectedTopic}/search/${questiontype.type}/${search}`
      );
      const response = await data.json();
      setQuestions(response);

      if (response.length === 0) {
        return setNoData(true);
      }
      setNoData(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (!questions) {
    return <></>;
  }

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
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search Questions"
            value={search}
            onChange={handleSearchChange}
            className="trending-questions__search"
          />
        </form>
        <div className="questions">
          <h2>Trending Questions</h2>
          {noData ? (
            <p>No questions found</p>
          ) : (
            questions.map((item, i) => (
              <div key={i}>
                <h3
                  className="trending-question"
                  onClick={() => {
                    setSelectedQuestion(questions[i]);
                  }}>
                  {item.question}
                </h3>
                {questions.indexOf(selectedQuestion) === i && (
                  <p>{item.answer}</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularQuestions;
