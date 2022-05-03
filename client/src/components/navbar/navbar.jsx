import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { addUser } from '../../features/userslice';

const NavBar = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // logout
  const logout = async (e) => {
    if (e) e.preventDefault();

    try {
      await fetch('/logout');
      dispatch(addUser(null));
      localStorage.removeItem('user');
      return navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ul id="navbar">
      {user === null || user.length === 0 ? (
        <>
          <Link to="/login">
            <li className="navbar__list-item">Login</li>
          </Link>
          <Link to="/register">
            <li className="navbar__list-item">Register</li>
          </Link>
        </>
      ) : (
        <div className="navbar__select">
          <BsFillPersonFill />
          <ul className="navbar__menu">
            <Link to="/mylist">
              <li>Saved Questions</li>
            </Link>
            <li onClick={logout}>Log Out</li>
          </ul>
        </div>
      )}
      {location.pathname !== '/trending' && (
        <Link to="/trending">
          <li className="navbar__list-item">Home</li>
        </Link>
      )}
      <Link to="/topics">
        <li className="navbar__list-item">View All Topics</li>
      </Link>
    </ul>
  );
};

export default NavBar;
