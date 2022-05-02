import { useState } from 'react';
import NavBar from '../../components/navbar/navbar';
import '../../styles/pages/user/user.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/userslice';

const Login = () => {
  const navigate = useNavigate();

  // errors
  const [registerStatus, setRegisterStatus] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  // login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    if (e) e.preventDefault();

    if (!username || !password) return;

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
      console.log(data);

      if (data.success) {
        fetchdata();
        setLoginStatus(data.message);

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
      console.log(data);
      if (data) dispatch(addUser(data));
    } catch (err) {
      console.error(err);
    }
  };

  // sign up
  const [sUUsername, setSUUsername] = useState('');
  const [sUEmail, setSUEmail] = useState('');
  const [sUPassword, setSUPassword] = useState('');
  const [sUConfirmPassword, setSUConfirmPassword] = useState('');

  const signUp = async (e) => {
    if (e) e.preventDefault();

    try {
      const data = await fetch('/register', {
        method: 'POST',
        body: JSON.stringify({
          sUPassword,
          sUConfirmPassword,
          sUEmail,
          sUUsername
        }),
        headers: { 'content-type': 'application/json' }
      });

      const responseError = await data.text();
      setRegisterStatus(responseError);
    } catch (err) {
      console.error(err);
    }
  };

  // logout
  const logout = async (e) => {
    if (e) e.preventDefault();

    try {
      await fetch('/logout');
      return navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="navbar">
        <h2>Know Your Code</h2>
        <NavBar />
      </div>
      <div className="user__auth">
        <div className="user__auth-login">
          <h3>Sign In</h3>
          <form onSubmit={login}>
            <input
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <input type="submit" onSubmit={login} />
          </form>
          <p>{loginStatus}</p>
        </div>
        <div className="user__auth-signup">
          <h3>Sign Up</h3>
          <form onSubmit={signUp}>
            <input
              placeholder="Username"
              value={sUUsername}
              onChange={(e) => setSUUsername(e.target.value)}
            />
            <input
              placeholder="Email"
              value={sUEmail}
              onChange={(e) => setSUEmail(e.target.value)}
              type="email"
            />
            <input
              placeholder="Password"
              value={sUPassword}
              onChange={(e) => setSUPassword(e.target.value)}
              type="password"
            />
            <input
              placeholder="Password"
              value={sUConfirmPassword}
              onChange={(e) => setSUConfirmPassword(e.target.value)}
              type="password"
            />
            <input type="submit" />
          </form>
          {registerStatus && (
            <ul>
              <li>{registerStatus}</li>
            </ul>
          )}
        </div>
      </div>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default Login;
