import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navbar/navbar";
// import { SearchQuestions } from "../components/searchquestions";
import "../styles/popularquestions.scss";
import { useDebounce } from "use-debounce";
import { SortQuestions } from "../components/navbar/sortquestions";

export const PopularQuestions = () => {
  const [questions, setQuestions] = useState([]);

  const [selectedTopic, setSelectedTopic] = useState("trending");

  const [selectedQuestion, setSelectedQuestion] = useState(false);

  const [topics, setTopics] = useState([]);

  const popularquestions = async () => {
    try {
      const data = await fetch(
        `/${selectedTopic.toLowerCase()}/allquestions`
      );
      const response = await data.json();
      setQuestions(response);
      setSelectedQuestion(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    popularquestions();
  }, [selectedTopic]);

  const initialFetch = async () => {
    try {
      const data = await fetch(`/topics`);
      const response = await data.json();
      setTopics(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initialFetch();
  }, []);

  const [search, setSearch] = useState("");
  // const [debounceValue] = useDebounce(search, 500);

  // let [noData, setNoData] = useState(false);

  const editInput = (e) => {
    setSearch(e.target.value);
    searchFilter(e);
  };

  const searchFilter = async (e) => {
    if (!search) {
      return popularquestions();
    }
    e.preventDefault();
    try {
      const data = await fetch(`/trending/${selectedTopic}/search/${search}`);
      const response = await data.json();
      console.log(response);
      setQuestions(response);

      // if (!response) {
      //   setNoData(!noData);
      // }
    } catch (error) {
      console.error(error);
    }
  };

  // if (!questions) {
  //   return <></>;
  // }

  return (
    <div className="pop">
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      <div className="topics">
        <h2>Popular Topics</h2>
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
        <form onSubmit={searchFilter}>
          <input
            type="text"
            placeholder="Search Questions"
            value={search}
            onChange={editInput}
            className="search-questions"
          />
        </form>
        <div className="questions">
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
              {questions.indexOf(selectedQuestion) === i && (
                <p>{item.answer}</p>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
