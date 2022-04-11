import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../features/questionsSlice';
export const ViewQuestions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic.topic);

  const questions = useSelector((state) => state.questions.questions);
  const status = useSelector((state) => state.questions.status);

  const dispatch = useDispatch();

  useEffect(() => {
    // if (status === 'idle') {
    dispatch(fetchQuestions({ topicId: selectedTopic }));
    // }
  }, [selectedTopic]);

  console.log(questions);

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    setSelectedQuestion(null);
  }, [selectedTopic]);
  return (
    <>
      {/* {noData ? (
        <p>No questions found</p>
      ) : ( */}
      {questions.status === 'error' && <h3>Oops an error has occured!</h3>}
      {questions.status === 'loading' && <h4>Loading...</h4>}
      {questions &&
        questions.map((item, i) => (
          <div key={i}>
            <h3
              className="trending-question"
              onClick={() => {
                setSelectedQuestion(questions[i]);
              }}
              _id={item.id}>
              {item.question}
            </h3>
            {questions.indexOf(selectedQuestion) === i && (
              <p className="answers">{item.answer}</p>
            )}
          </div>
        ))}
    </>
  );
};
