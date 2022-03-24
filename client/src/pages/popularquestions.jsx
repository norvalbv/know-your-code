import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navbar/navbar";
import "../styles/popularquestions.scss";

export const PopularQuestions = () => {
  const [questions, setQuestions] = useState([]);

  const [selectedTopic, setSelectedTopic] = useState("trending");

  const [selectedQuestion, setSelectedQuestion] = useState(false);

  const [topics, setTopics] = useState([]);

  const popularquestions = async () => {
    try {
      const data = await fetch(
        `http://localhost:5000/${selectedTopic.toLocaleLowerCase()}/allquestions`
      );
      const response = await data.json();
      setQuestions(response);
      setSelectedQuestion(false);
    } catch (error) {
      console.error(error);
    }
  };

  // (async () => {

  // })();

  const initialFetch = async () => {
    try {
      const data = await fetch(`http://localhost:5000/topics`);
      const response = await data.json();
      console.log(response);
      setTopics(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initialFetch();
  }, []);

  useEffect(() => {
    popularquestions();
  }, [selectedTopic]);

  if (!questions) {
    return <></>;
  }

  return (
    <div className="pop">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="topics">
        {topics.map((item, i) => (
          <button
            key={i}
            className="topic"
            onClick={() => setSelectedTopic(item.topic)}
          >
            {item.topic}
          </button>
        ))}
      </div>
      <div className="trending-questions">
        <h2>Trending Questions</h2>
        {questions.map((item, i) => (
          <React.Fragment key={i}>
            <h3
              className="trending-question"
              onClick={() => {
                setSelectedQuestion(questions[i]);
              }}
            >
              {item.question}
            </h3>
            {questions.indexOf(selectedQuestion) === i && <p>{item.answer}</p>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
