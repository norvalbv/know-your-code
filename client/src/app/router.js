import Landing from '../pages/landing';
import PopularQuestions from '../pages/popularquestions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Topics } from '../pages/topics';
import NotFound from '../pages/404';
import ChosenTopic from '../pages/chosentopic';
import Login from '../pages/user/login';
import QuestionList from '../pages/user/questionlist';
import Register from '../pages/user/register';

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/trending" element={<PopularQuestions />}></Route>
        <Route path="/topics" element={<Topics />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
        <Route path="/topic/:chosentopic" element={<ChosenTopic />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/mylist" element={<QuestionList />}></Route>
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
