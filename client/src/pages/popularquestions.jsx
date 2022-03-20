import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navbar/navbar";
import "../styles/popularquestions.scss";

export const PopularQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [tempdata, setTempdata] = useState(null);
  const [currentTopic, setCurrentTopic] = useState("trending");

  const popularquestions = async () => {
    try {
      const data = await fetch(
        `http://localhost:5000/${currentTopic}/allquestions`
      );
      const response = await data.json();
      console.log(response);
      setQuestions(response);
    } catch (error) {
      console.error(error);
      setTempdata([{ 1: "2" }, { 1: "2" }, { 1: "2" }, { 1: "2" }, { 1: "2" }]);
    }
  };

  useEffect(() => {
    popularquestions();
  }, [currentTopic]);

  const handleTopicClick = () => {
    setCurrentTopic("html");
  };

  const tempList = ["HTML / CSS", "JavaScript", "React", "Redux", "2", "3"];

  if (!questions) {
    return <></>
  }

  return (
    <div className="pop">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="topics">
        {tempList.map((item) => (
          <button
            key={Math.random()}
            className="topic"
            onClick={handleTopicClick}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="trending-questions">
        <h2>Trending Questions</h2>
        {questions.map((item) => (
          <React.Fragment key={Math.random()}>
            <h3
              className="trending-question"
              onClick={() => setClicked(!clicked)}
            >
              {item.description}
            </h3>
            {clicked && <p>{item.answer}</p>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
