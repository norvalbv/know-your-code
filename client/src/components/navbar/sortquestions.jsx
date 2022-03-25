import "../../styles/navbar/navbar.scss";
import { useState, useContext } from "react";

export const SortQuestions = () => {

  const questionType = useContext();

  return (
    <>
      <ul className="sort-questions">
        <li
        //   onClick={() => setActiveQuestionType("questions")}
          id={questionType === "questions" && "questions"}
        >
          Questions
        </li>
        <li
        //   onClick={() => setActiveQuestionType("syntax")}
          id={questionType === "syntax" && "syntax"}
        >
          Syntax
        </li>
      </ul>
    </>
  );
};
