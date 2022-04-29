import { useState } from 'react';
import NavBar from '../../components/navbar/navbar';
import '../../styles/pages/user/user.scss';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    if (!name || !password) return;
    if (e) e.preventDefault();

    try {
      console.log(name, password);
      const data = await fetch('/register', {
        method: 'POST',
        body: JSON.stringify({
          password,
          username: { username: name }
        }),
        headers: { 'content-type': 'application/json' }
      });
      return data.json();
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
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <input type="submit" onSubmit={login} />
          </form>
        </div>
        <div className="user__auth-signup">
          <h3>Sign Up</h3>
          <form>
            <input placeholder="value" />
            <input placeholder="value" />
            <input placeholder="value" />
            <input placeholder="value" />
            <input placeholder="value" />
            <input placeholder="value" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
