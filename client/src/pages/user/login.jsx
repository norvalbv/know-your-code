import { useState } from 'react';
import NavBar from '../../components/navbar/navbar';
import '../../styles/pages/user/user.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/userslice';
import { Alert, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();

  // errors
  const [loginStatus, setLoginStatus] = useState('');

  // login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    if (e) e.preventDefault();

    if (!username || !password)
      return setLoginStatus('Please enter all fields');

    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
          password,
          username
        }),
        headers: { 'content-type': 'application/json' },
        credentials: 'include'
      });

      const data = await response.json();

      if (data) setLoginStatus(data.message);

      if (data.success) {
        fetchdata();
        setTimeout(() => {
          return navigate('/trending');
        }, 500);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const dispatch = useDispatch();

  const fetchdata = async () => {
    try {
      const response = await fetch('/users');
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      if (data) dispatch(addUser(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(loginStatus);
  }, [loginStatus]);

  return (
    <>
      <div className="navbar">
        <h2>Know Your Code</h2>
        <NavBar />
      </div>
      <div id="login">
        <Form onSubmit={login}>
          <h3>Sign In</h3>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={login}
            className="user__submit">
            Submit
          </Button>
          {loginStatus && (
            <Alert variant="danger" className="user__alter">
              {loginStatus}
            </Alert>
          )}
          <p>Don&apos;t have an account?</p>
          <Link to="/register">
            <Button variant="secondary">Register an account</Button>
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Login;
