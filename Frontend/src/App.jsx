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
import { useSelector } from "react-redux";
import { getSideBar } from "./redux/SideBarSlice/SideBarSlice";
import SmallSideBar from "./Components/SmallSideBar";
function App() {
  const sidebar = useSelector(getSideBar);
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Project />
        <Contact />
        {/* {sidebar ? <SmallSideBar /> : ""} */}
      </Router>
    </>
  );
}

export default App;
