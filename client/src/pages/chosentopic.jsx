import NavBar from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';
import { SearchQuestions } from '../components/searchquestions';
import { ViewQuestions } from '../components/viewquestions';

export const ChosenTopic = () => {
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
        <ViewQuestions />
      </div>
    </>
  );
};
