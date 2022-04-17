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
            <p
              className="view-questions__question"
              onClick={() => {
                setSelectedQuestion(questionsToDisplay[i]);
              }}
              _id={item.id}>
              Q{i + 1}: {item.question}
            </p>
            {questionsToDisplay.indexOf(selectedQuestion) === i && (
              <p className="view-questions__answer">{item.answer}</p>
            )}
          </div>
        ))}
    </>
  );
};
