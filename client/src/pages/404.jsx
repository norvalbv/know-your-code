import NavBar from '../components/navbar/navbar';
import { Link } from 'react-router-dom';
import '../styles/pages/404/404.scss';

const NotFound = () => {
  return (
    <>
      <div className="nav">
        <NavBar />
      </div>
      <section className="_404__section">
        <p>
          <span>UH OH!</span> Page not found
        </p>
        <Link to="/">
          <button className="_404__button">Go Back To HomePage</button>
        </Link>
      </section>
    </>
  );
};

export default NotFound;
