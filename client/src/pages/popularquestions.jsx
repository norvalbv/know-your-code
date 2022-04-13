import NavBar from '../components/navbar/navbar';
import '../styles/pages/popularquestions/popularquestions.scss';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
import { ViewQuestions } from '../components/viewquestions';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelected } from '../features/selectedTopicSlice';
import { fetchTopics } from '../features/topicSlice';
import { fetchQuestions } from '../features/questionsSlice';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PopularQuestions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic.topic);
  const questionType = useSelector((state) => state.questionType.category);
  const topic = useSelector((state) => state.topics.topics);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopics());
    dispatch(fetchQuestions(selectedTopic));
  }, [dispatch, selectedTopic, questionType]);

  return (
    <section className="popular-topics__container">
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      {topic && (
        <>
          <div className="popular-topics__topics">
            <h2>Popular Topics</h2>
            {selectedTopic.toLowerCase() !== 'trending' && (
              <button
                className="__topic"
                onClick={() => dispatch(updateSelected('trending'))}>
                All Trending Questions
              </button>
            )}
            {topic.map((item, i) => (
              <React.Fragment key={i}>
                <button
                  className="__topic"
                  onClick={() => {
                    if (
                      topic
                        .map((topic) => topic.name)
                        .indexOf(selectedTopic) === i
                    ) {
                      dispatch(updateSelected('trending'));
                    } else {
                      dispatch(updateSelected(topic[i].name));
                    }
                  }}
                  style={{
                    backgroundColor:
                      topic
                        .map((topic) => topic.name)
                        .indexOf(selectedTopic) === i
                        ? 'hsla(281, 100%, 50%, 0.2)'
                        : 'inherit'
                  }}>
                  {item.name.toUpperCase()}
                </button>
                {topic.map((topic) => topic.name).indexOf(selectedTopic) ===
                  i && (
                  <Link to={['/topic/', item.name].join('')}>
                    <button
                      className="__topic view-all"
                      style={{
                        backgroundColor:
                          topic
                            .map((topic) => topic.name)
                            .indexOf(selectedTopic) === i
                            ? 'darkred'
                            : 'inherit'
                      }}>
                      View All {item.name.toUpperCase()}{' '}
                      {questionType === 'syntax' && 'Syntax'} Questions
                    </button>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="trending-questions__container">
            <SearchQuestions selectedTopic={selectedTopic} />
            <div className="questions">
              <h2>
                {selectedTopic.toUpperCase()}
                {questionType === 'syntax'
                  ? ' Syntax Questions'
                  : ' Interview Questions'}
              </h2>
              <ViewQuestions />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default PopularQuestions;
