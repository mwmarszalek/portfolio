import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./containers/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectsList from "./components/projects/ProjectsList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
