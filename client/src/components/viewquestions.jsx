import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestionsToDisplay } from '../features/questionsToDisplaySlice';
export const ViewQuestions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic.topic);
  const questionType = useSelector((state) => state.questionType.category);

  const questions = useSelector((state) => state.questions.questions);
  const questionsToDisplay = useSelector(
    (state) => state.questionsToDisplay.questions
  );

  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(selectedTopic);
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
      {/* {questions.status === 'error' && <h3>Oops an error has occured!</h3>} */}
      {/* {questions.status === 'loading' && <h4>Loading...</h4>} */}
      {/* {questions && console.log(questionsToDisplay)} */}
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
