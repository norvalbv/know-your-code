import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestionsToDisplay } from '../features/questionsToDisplaySlice';
import Loading from './loading';

export const ViewQuestions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic.topic);
  const questionType = useSelector((state) => state.questionType.category);

  const questions = useSelector((state) => state.questions.questions);
  const questionsToDisplay = useSelector(
    (state) => state.questionsToDisplay.questions
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const notSyntax = questions.filter((item) => !item.is_Syntax);
    const isSyntax = questions.filter((item) => item.is_Syntax);

    questionType.toLowerCase() === 'syntax'
      ? dispatch(updateQuestionsToDisplay(isSyntax))
      : dispatch(updateQuestionsToDisplay(notSyntax));
  }, [selectedTopic, dispatch, questions, questionType]);

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <>
      {/* {noData ? (
        <p>No questions found</p>
      ) : ( */}
      {questions.status === 'loading' && <Loading />}
      {questionsToDisplay &&
        questionsToDisplay.map((item, i) => (
          <div key={i}>
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
