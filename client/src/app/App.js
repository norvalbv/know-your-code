import '../styles/global.scss';
import PublicRoutes from './router';
import { useState } from 'react';
import { SelectedQuestionType } from '../context/selectedquestion';

const App = () => {
  const toggleQuestionType = () => {
    // console.log(questionType.type);
    questionType.type === 'questions'
      ? setQuestionType({ type: 'syntax' })
      : setQuestionType({ type: 'questions' });
  };

  const [questionType, setQuestionType] = useState({
    type: 'questions',
    toggleQuestionType: toggleQuestionType
  });

  return (
    <div className="app-container">
      <SelectedQuestionType.Provider value={questionType}>
        <PublicRoutes />
      </SelectedQuestionType.Provider>
    </div>
  );
};

export default App;
