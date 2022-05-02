import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userslice';
import '../styles/global.scss';
import PublicRoutes from './router';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(addUser(user));
    }
  }, []);

  return (
    <div className="app-container">
      <PublicRoutes />
      <a
        href="https://github.com/norvalbv/know-your-code/issues"
        rel="noopener noreferrer"
        className="app-bug-button">
        Report Bug
      </a>
    </div>
  );
};

export default App;
