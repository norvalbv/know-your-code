import NavBar from '../components/navbar/navbar';
import { Link } from 'react-router-dom';
import { SortQuestions } from '../components/navbar/sortquestions';

const NotFound = () => {
  return (
    <>
      <div className="nav">
        <SortQuestions />
        <NavBar />
      </div>
      <section>
        <p>Page not found</p>
        <Link to="/trending">
          <button>Home Page</button>
        </Link>
      </section>
    </>
  );
};

export default NotFound;
