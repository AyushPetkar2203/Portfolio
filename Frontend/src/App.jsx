import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router } from "react-router-dom";
import Resume from "./Components/Resume";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Project />
        <Contact />
      </Router>
    </>
  );
}

export default App;
