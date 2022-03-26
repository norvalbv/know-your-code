import React from 'react';
import NavBar from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';

export const ChosenTopic = () => {
  const temparr = [];
  return (
    <>
      <div className="nav">
        <SortQuestions />
        <NavBar />
      </div>
      <div className="title-search">
        <h2>HTML Questions</h2>
        <SearchQuestions />
      </div>
      <div className="qanda">
        {temparr.map((item, i) => (
          <div key={i}>
            <h3
              className="trending-question"
              onClick={() => {
                // setSelectedQuestion(questions[i]);
              }}>
              {item.question}
            </h3>
            {/* {temparr.indexOf(selectedQuestion) === i && <p>{item.answer}</p>} */}
          </div>
        ))}
      </div>
    </>
  );
};
