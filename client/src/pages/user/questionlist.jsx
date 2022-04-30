import parse from 'html-react-parser';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../../components/navbar/navbar';
import Sortquestions from '../../components/navbar/sortquestions';
import { removeQuestion } from '../../features/chosenQuestionList';

const QuestionList = () => {
  const { questions } = useSelector((state) => state.chosenQuestionList);
  console.log(questions);

  const dispatch = useDispatch();
  const handleClick = (item) => {
    if (item) {
      dispatch(removeQuestion(item));
    }
  };

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <>
      <div className="navbar">
        <Sortquestions />
        <NavBar />
      </div>
      <div style={{ margin: '0 auto', width: '80%' }}>
        <h2>Hi [ name ]</h2>
        <h3>Your selected questions...</h3>
        {questions.length > 0 ? (
          questions.map((item, i) => (
            <div key={i} className="view-questions__container">
              <div className="view-questions__question-container">
                <p
                  className="view-questions__question"
                  onClick={() => {
                    if (questions.indexOf(selectedQuestion) !== i) {
                      setSelectedQuestion(questions[i]);
                    } else {
                      setSelectedQuestion(null);
                    }
                  }}
                  _id={item.id}>
                  Q{i + 1}: {item.question}
                </p>
                <button className="list" onClick={() => handleClick(item)}>
                  Remov from your list
                </button>
              </div>
              {questions.indexOf(selectedQuestion) === i && (
                <>
                  <p className="view-questions__answer">{item.answer}</p>
                  {item.example && (
                    <>
                      <p className="view-questions__example-title">
                        Example usage:
                      </p>
                      <p className="view-questions__example">
                        {parse(item.example)}
                      </p>
                    </>
                  )}
                  <div className="view-questions__extra-info">
                    {item.external_source && (
                      <p className="view-questions__extra-info-ex-source">
                        Read more about this question{' '}
                        <a
                          href={item.external_source}
                          target="_blank"
                          rel="noopener noreferrer">
                          here
                        </a>
                      </p>
                    )}
                    {item.difficulty && (
                      <p className="view-questions__extra-info-level">
                        Level: <span>{item.difficulty}</span>
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No Questions In Your List</p>
        )}
      </div>
    </>
  );
};

export default QuestionList;
