import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';
import '../../styles/pages/user/user.scss';

const Register = () => {
  const [registerStatus, setRegisterStatus] = useState('');

  // sign up
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = async (e) => {
    if (e) e.preventDefault();

    try {
      const data = await fetch('/register', {
        method: 'POST',
        body: JSON.stringify({
          password,
          confirmPassword,
          email,
          username
        }),
        headers: { 'content-type': 'application/json' }
      });

      const responseError = await data.text();
      setRegisterStatus(responseError);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <div className="navbar">
        <h2>Know Your Code</h2>
        <NavBar />
      </div>
      <div id="register">
        <Form className="t">
          <h3>Register an account</h3>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={signUp}
            className="user__submit">
            Submit
          </Button>
          {registerStatus && (
            <Alert variant="danger" className="user__alert">
              {registerStatus}{' '}
              {registerStatus.toLowerCase() === 'user created' && (
                <Link to="/login">Login</Link>
              )}
            </Alert>
          )}
          <p>Already have an account?</p>
          <Link to="/login">
            <Button variant="secondary">Login to an account</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
