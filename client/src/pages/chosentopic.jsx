import NavBar from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
import ViewQuestions from '../components/viewquestions';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchQuestions } from '../features/questionsSlice';
import '../styles/pages/chosentopic/chosentopic.scss';

const ChosenTopic = () => {
  const location = useLocation();
  const currentLocation = location.pathname.split('/')[2];

  const topic = useSelector((state) => state.selectedTopic.topic);
  const questionType = useSelector((state) => state.questionType.category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions(currentLocation ?? topic));
  }, [topic]);

  return (
    <>
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      <div className="title-search">
        <SearchQuestions />
      </div>
      <div className="qanda">
        <ViewQuestions questionType={questionType} />
      </div>
    </>
  );
};

export default ChosenTopic;
