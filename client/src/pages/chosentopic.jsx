import { useContext, useEffect, useState } from 'react';
import NavBar from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
import { SelectedQuestionType } from '../context/selectedquestion';

export const ChosenTopic = () => {
  const [selectedTopic, setSelectedTopic] = useState('trending');
  const [questions, setQuestions] = useState([]);
  const questiontype = useContext(SelectedQuestionType);
  const [selectedQuestion, setSelectedQuestion] = useState(false);

  const topicQuestions = async () => {
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

  useEffect(() => {
    topicQuestions();
  }, []);

  return (
    <>
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      <div className="title-search">
        <h2>{selectedTopic} Questions</h2>
        <SearchQuestions />
      </div>
      <div className="qanda">
        {questions.map((item, i) => (
          <div key={i}>
            <h3
              className="trending-question"
              onClick={() => {
                setSelectedQuestion(questions[i]);
              }}>
              {item.question}
            </h3>
            {questions.indexOf(selectedQuestion) === i && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </>
  );
};
