import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id="navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/topics">
          <li>Catalog</li>
        </Link>
        <li>Trending Questions</li>
      </ul>
    </div>
  );
};

export default NavBar;
