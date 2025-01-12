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
import { Card, CardContent } from "@mui/material";
function App() {
  const sidebar = useSelector(getSideBar);
  return (
    <>
      <div id="root">
        <Router>
          <Navbar />
          <div className="p-4 rounded-lg">
            <Card sx={{ backgroundColor: "#1a1a1a", position: "sticky" }}>
              <CardContent
                sx={{
                  backgroundColor: "#1a1a1a",
                  padding: "20px",
                  borderRadius: "10px", // Rounded corners
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Home />
                <About />
              </CardContent>
            </Card>
            <div className="bg-[#1a1a1a]">
              <Resume />
              <Project />
            </div>
          </div>
          <Contact />
          {/* {sidebar ? <SmallSideBar /> : ""} */}
        </Router>
      </div>
    </>
  );
}

export default App;
