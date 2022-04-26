import '../styles/global.scss';
import PublicRoutes from './router';

const App = () => {
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
