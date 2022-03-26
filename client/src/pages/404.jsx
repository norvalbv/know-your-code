import NavBar from '../components/navbar/navbar';
import { Link } from 'react-router-dom';
import { SortQuestions } from '../components/navbar/sortquestions';

export const NotFound = () => {
  return (
    <>
      <div className="nav">
        <SortQuestions />
        <NavBar />
      </div>
      <section>
        <p>Page not found</p>
        <Link to="/questions">
          <button>Home Page</button>
        </Link>
      </section>
    </>
  );
};
