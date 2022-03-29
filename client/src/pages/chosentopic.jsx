import { useSelector } from 'react-redux';
import NavBar from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
import { ViewQuestions } from '../components/viewquestions';

export const ChosenTopic = () => {
  const topic = useSelector((state) => state.topics);

  return (
    <>
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
      <div className="title-search">
        {/* <h2>{topic} Questions</h2> */}
        <SearchQuestions />
      </div>
      <div className="qanda">
        <ViewQuestions />
      </div>
    </>
  );
};
