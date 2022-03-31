//import { useState } from 'react';
import NavBar from '../components/navbar/navbar';
import '../styles/popularquestions.scss';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
import { ViewQuestions } from '../components/viewquestions';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelected } from '../features/selectedTopicSlice';
import { useGetAlltopicsQuery } from '../services/questionsApi';
import { updateTopics } from '../features/topicSlice';

const PopularQuestions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic.topic);
  const { data, isLoading, error } = useGetAlltopicsQuery(); // can be used to render error page or a loading animation

  const questionType = useSelector((state) => state.questionType.category);
  const dispatch = useDispatch();
  dispatch(updateTopics(data));

  let newArr;

  return (
    <section className="popular-topics__container">
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      {error && <h3>Oops an error has occured!</h3>}
      {isLoading && <h4>Loading...</h4>}
      {data && ( // render if data, create loading and error components
        <>
          {(newArr = data.map((topic) => topic.topic))}
          <div className="popular-topics__topics">
            <h2>Popular Topics</h2>
            {data.map((item, i) => (
              <button
                key={i}
                className="__topic"
                onClick={() => dispatch(updateSelected(data[i].topic))}
                style={{
                  backgroundColor:
                    newArr.indexOf(selectedTopic) === i
                      ? 'hsla(281, 100%, 50%, 0.2)'
                      : 'inherit'
                }}>
                {item.topic}
              </button>
            ))}
          </div>

          <div className="trending-questions__container">
            <SearchQuestions selectedTopic={selectedTopic} />
            <div className="questions">
              <h2>
                {selectedTopic} {}
                {questionType === 'syntax'
                  ? 'Syntax Questions'
                  : 'Interview Questions'}{' '}
                {/* {console.log(data)} */}
              </h2>
              <ViewQuestions selectedTopic={selectedTopic} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default PopularQuestions;
