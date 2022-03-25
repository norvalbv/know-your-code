import '../styles/global.scss';
import PublicRoutes from './router';
import NavBar from '../components/NavBar/NavBar';

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <PublicRoutes />
    </div>
  );
};

export default App;
