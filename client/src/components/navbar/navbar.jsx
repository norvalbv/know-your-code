import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);

  return (
    <ul id="navbar">
      {location.pathname !== '/trending' && (
        <Link to="/trending">
          <li className="navbar__list-item">Home</li>
        </Link>
      )}
      {!user ? (
        <Link to="/login">
          <li className="navbar__list-item">Login</li>
        </Link>
      ) : (
        <Link to="/login">
          <li className="navbar__list-item">Logout</li>
        </Link>
      )}
      {user && (
        <Link to="/mylist">
          <li className="navbar__list-item">My List</li>
        </Link>
      )}
      <Link to="/topics">
        <li className="navbar__list-item">View All Topics</li>
      </Link>
    </ul>
  );
};

export default NavBar;
