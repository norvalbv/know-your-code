import NavBar from '../../components/navbar/navbar';
import '../../styles/pages/user/user.scss';

const Login = () => {
  return (
    <>
      <div className="navbar">
        <h2>Know Your Code</h2>
        <NavBar />
      </div>
      <div className="user__auth">
        <div className="user__auth-login">
          <h3>Sign In</h3>
          <form>
            <input placeholder="value" /> <input />
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
