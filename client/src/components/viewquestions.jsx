import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLoadQuestionsQuery } from '../services/questionsApi';
export const ViewQuestions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic.topic);
  const questionType = useSelector((state) => state.questionType.category);

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const string = `${selectedTopic.toLowerCase()}/all/${questionType}`;
  const { data, isLoading, error } = useLoadQuestionsQuery(string);

  useEffect(() => {
    setSelectedQuestion(null);
  }, [selectedTopic]);
  return (
    <>
      {/* {noData ? (
        <p>No questions found</p>
      ) : ( */}
      {error && <h3>Oops an error has occured!</h3>}
      {isLoading && <h4>Loading...</h4>}
      {data &&
        data.map((item, i) => (
          <div key={i}>
            <h3
              className="trending-question"
              onClick={() => {
                setSelectedQuestion(data[i]);
              }}
              _id={item.id}>
              {item.question}
            </h3>
            {data.indexOf(selectedQuestion) === i && (
              <p className="answers">{item.answer}</p>
            )}
          </div>
        ))}
    </>
  );
};
