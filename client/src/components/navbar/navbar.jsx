import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { addUser } from '../../features/userslice';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

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

  const [show, setShow] = useState(false);

  return (
    <ul id="navbar">
      {location.pathname !== '/trending' && (
        <Link to="/trending">
          <li className="navbar__list-item">Home</li>
        </Link>
      )}
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
        <Dropdown
          className="d-inline mx-2"
          onMouseEnter={() => setShow(!show)}
          onMouseLeave={() => setShow(!show)}>
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            className="dropdown__toggle">
            <BsFillPersonFill />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown__menu" show={show}>
            <Dropdown.Item href="#">
              <Link to="/mylist">Saved Questions</Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
      <Link to="/topics">
        <li className="navbar__list-item">View All Topics</li>
      </Link>
    </ul>
  );
};

export default NavBar;
