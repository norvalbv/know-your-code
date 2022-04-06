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
  const questionType = useSelector((state) => state.questionType.category);

  const { data } = useGetAlltopicsQuery(); // error and loading state not needed as a spinner can solely be used the questions component

  const dispatch = useDispatch();
  dispatch(updateTopics(data));

  return (
    <section className="popular-topics__container">
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      {data && (
        <>
          <div className="popular-topics__topics">
            <h2>Popular Topics</h2>
            {data.map((item, i) => (
              <button
                key={i}
                className="__topic"
                onClick={() => dispatch(updateSelected(data[i].topic))}
                style={{
                  backgroundColor:
                    data.map((topic) => topic.topic).indexOf(selectedTopic) ===
                    i
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
                {selectedTopic}
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
