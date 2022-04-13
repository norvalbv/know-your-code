import NavBar from '../components/navbar/navbar';
import '../styles/popularquestions.scss';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
import { ViewQuestions } from '../components/viewquestions';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelected } from '../features/selectedTopicSlice';
import { fetchTopics } from '../features/topicSlice';
import { fetchQuestions } from '../features/questionsSlice';

import { useEffect } from 'react';

const PopularQuestions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic.topic);
  const questionType = useSelector((state) => state.questionType.category);
  const topic = useSelector((state) => state.topics.topics);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopics());
    dispatch(fetchQuestions(selectedTopic));
  }, [dispatch, selectedTopic]);

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
            {topic.map((item, i) => {
              return (
                <button
                  key={i}
                  className="__topic"
                  onClick={async () => {
                    dispatch(updateSelected(topic[i].name));
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
              );
            })}
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
