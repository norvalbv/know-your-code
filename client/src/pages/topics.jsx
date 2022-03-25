import { NavBar } from '../components/navbar/navbar';
import { SortQuestions } from '../components/navbar/sortquestions';

export const Topics = () => {
  return (
    <div>
      <div className="navbar">
        <SortQuestions />
        <NavBar />
      </div>
    </div>
  );
};
