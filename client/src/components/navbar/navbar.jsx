import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <div id="navbar">
      <ul>
        {location.pathname !== '/trending' && (
          <Link to="/trending">
            <li>Home</li>
          </Link>
        )}
        <Link to="/topics">
          <li>Topics</li>
        </Link>
        <li>Trending Questions</li>
      </ul>
    </div>
  );
};

export default NavBar;
