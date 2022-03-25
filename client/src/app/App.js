import React, { useState } from "react";
import { Landing } from "../pages/landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import '../styles/global.scss';
import { PopularQuestions } from '../pages/popularquestions';

export const QuestionType = React.createContext();

function App() {
  const [activeQuestionType, setActiveQuestionType] = useState("questions");
  return (
    <div className="app">
      <QuestionType.Provider value={"questions"}>
        <Router>
          <Routes>
            {/* <Route exact path="/" element={<Navigate to="/trendingquestions" replace />}></Route> */}
            <Route path="/landing" element={<Landing />}></Route>
            <Route exact path="/" element={<PopularQuestions />}></Route>
          </Routes>
        </Router>
      </QuestionType.Provider>
    </div>
  );
}

export default App;
