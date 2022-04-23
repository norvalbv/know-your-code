import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestionsToDisplay } from '../features/questionsToDisplaySlice';
import Loading from './loading';
import { useSearchParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ViewQuestions = ({ questionType }) => {
  const questions = useSelector((state) => state.questions.questions);
  const questionsToDisplay = useSelector(
    (state) => state.questionsToDisplay.questions
  );

  console.log('child render');
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.get('search')) {
      const filterItems = questions.filter((item) =>
        item.question.toLowerCase().includes(params.get('search').toLowerCase())
      );
      dispatch(updateQuestionsToDisplay(filterItems));
    } else {
      dispatch(updateQuestionsToDisplay(questions));
    }
  }, [questions, questionType]);

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <>
      {/* {noData ? (
        <p>No questions found</p>
      ) : ( */}
      {questions.status === 'loading' && <Loading />}
      {questionsToDisplay.length === 0 ? (
        <p>Coming soon...</p>
      ) : (
        questionsToDisplay.map((item, i) => (
          <div key={i} className="view-questions__container">
            <p
              className="view-questions__question"
              onClick={() => {
                setSelectedQuestion(questionsToDisplay[i]);
              }}
              _id={item.id}>
              Q{i + 1}: {item.question}
            </p>
            {questionsToDisplay.indexOf(selectedQuestion) === i && (
              <>
                <p className="view-questions__answer">{item.answer}</p>
                {item.example && (
                  <>
                    <p className="view-questions__example-title">
                      Example usage:
                    </p>
                    <p className="view-questions__example">{item.example}</p>
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
      )}
    </>
  );
};

export default React.memo(ViewQuestions);
