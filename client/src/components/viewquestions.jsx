import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestionsToDisplay } from '../features/questionsToDisplaySlice';
import Loading from './loading';
import { useSearchParams } from 'react-router-dom';

export const ViewQuestions = () => {
  const questionType = useSelector((state) => state.questionType.category);

  const questions = useSelector((state) => state.questions.questions);

  const questionsToDisplay = useSelector(
    (state) => state.questionsToDisplay.questions
  );

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
      {questionsToDisplay &&
        questionsToDisplay.map((item, i) => (
          <div key={i} className="view-questions__container">
            <h3
              className="trending-question"
              onClick={() => {
                setSelectedQuestion(questionsToDisplay[i]);
              }}
              _id={item.id}>
              {item.question}
            </h3>
            {questionsToDisplay.indexOf(selectedQuestion) === i && (
              <p className="answers">{item.answer}</p>
            )}
          </div>
        ))}
    </>
  );
};
