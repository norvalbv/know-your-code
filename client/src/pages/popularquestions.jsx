import { useEffect, useState } from 'react';
import NavBar from '../components/navbar/navbar';
import '../styles/popularquestions.scss';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
import { ViewQuestions } from '../components/viewquestions';
import { useDispatch, useSelector } from 'react-redux';
//import { getTopics } from '../features/topicSlice';
import { useGetAlltopicsQuery } from '../services/questionsApi';

const PopularQuestions = () => {
  const [selectedTopic, setSelectedTopic] = useState('Trending');

  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetAlltopicsQuery(); // can be used to render error page or a loading animation

  const questionType = useSelector((state) => state.questionType.category);

  //const newArr = data.map((topic) => topic.topic);

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
                onClick={() => setSelectedTopic(item.topic)}
                style={{
                  backgroundColor:
                    data.indexOf(selectedTopic) === i
                      ? 'hsla(281, 100%, 50%, 0.2)'
                      : 'inherit'
                }}>
                {item.topic}
              </button>
            ))}
          </div>

          <div className="trending-questions__container">
            <SearchQuestions />
            <div className="questions">
              <h2>
                {selectedTopic} {}
                {questionType === 'syntax'
                  ? 'Syntax Questions'
                  : 'Interview Questions'}{' '}
                {console.log(data)}
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
