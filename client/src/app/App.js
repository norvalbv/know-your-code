import { Landing } from "../pages/landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../styles/global.scss";
import { PopularQuestions } from "../pages/popularquestions";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/pop" replace />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="/pop" element={<PopularQuestions />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
