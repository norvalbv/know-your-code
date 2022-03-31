import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { getQuestions } from '../features/questionsSlice';

// eslint-disable-next-line react/prop-types
export const ViewQuestions = ({ selectedTopic }) => {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const dispatch = useDispatch();
  const topicType = useSelector((state) => state.questionType.category);

  // useEffect(() => {
  // dispatch(getQuestions(selectedTopic));
  // }, [selectedTopic, topicType]);

  const questions = useSelector((state) => state.questions);
  let arr = [];
  questions.topics.forEach((topic) => arr.push(topic));

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
            }}
            style={{
              textDecoration:
                arr.indexOf(selectedQuestion) === i ? 'underline' : 'inherit'
            }}>
            {item.question}
          </h3>
          {arr.indexOf(selectedQuestion) === i && (
            <p className="answers">{item.answer}</p>
          )}
        </div>
      ))}
      {/* )} */}
    </>
  );
};
