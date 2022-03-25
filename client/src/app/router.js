import Landing from '../pages/landing';
import PopularQuestions from '../pages/popularquestions';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Topics } from '../pages/topics';

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Navigate to="/trendingquestions" replace />}></Route> */}
        <Route path="/landing" element={<Landing />}></Route>
        <Route exact path="/" element={<PopularQuestions />}></Route>
        <Route path="/topics" element={<Topics />}></Route>
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
