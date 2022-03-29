import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../features/questions';

// eslint-disable-next-line react/prop-types
export const ViewQuestions = ({ selectedTopic }) => {
  console.log(selectedTopic);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions(selectedTopic));
  }, [selectedTopic]);

  const questions = useSelector((state) => state.questions);
  let arr = [];
  questions.topics.forEach((topic) => arr.push(topic));
  console.log(arr);

  return (
    <>
      {/* {noData ? (
        <p>No questions found</p>
      ) : ( */}
      {arr.map((item, i) => (
        <div key={i}>
          <h3
            className="trending-question"
            onClick={() => {
              setSelectedQuestion(arr[i]);
            }}>
            {item.question}
          </h3>
          {arr.indexOf(selectedQuestion) === i && <p>{item.answer}</p>}
        </div>
      ))}
      {/* )} */}
    </>
  );
};
