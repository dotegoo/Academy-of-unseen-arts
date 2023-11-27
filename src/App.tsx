import Intermediate from "./components/Intermediate.tsx";
import Base from "./components/Base.tsx";
import Advanced from "./components/Advanced.tsx";
import Home from "./components/Home.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path='/academy-of-unseen-arts/' />
        <Route path='/academy-of-unseen-arts/Base/' element={<Base />} />
        <Route
          path='/academy-of-unseen-arts/Intermediate/'
          element={<Intermediate />}
        />
        <Route
          path='/academy-of-unseen-arts/Advanced/'
          element={<Advanced />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
