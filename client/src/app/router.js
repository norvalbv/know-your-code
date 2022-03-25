import Landing from '../pages/Landing';
import PopularQuestions from '../pages/PopularQuestions';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Navigate to="/trendingquestions" replace />}></Route> */}
        <Route path="/landing" element={<Landing />}></Route>
        <Route exact path="/" element={<PopularQuestions />}></Route>
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
