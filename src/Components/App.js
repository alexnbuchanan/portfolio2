import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About";
import Nav from "./NavBar/Nav";
import { useEffect } from "react";
import Ecomm from "./Projects/Ecomm";
import Social from "./Projects/Social";
import Soundspace from "./Projects/Soundspace";
import Soundspaceux from "./Projects/Soundspaceux";

function App() {
  useEffect(() => {
    /*const options = {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.05,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
    };*/
    window.grained("#divContainer", {});
  }, []);

  return (
    <Router>
      <div id="divContainer">
        <Nav />

        <Routes>
          <Route path="/ecomm" element={<Ecomm />} />
          <Route path="/social" element={<Social />} />
          <Route path="/soundspace" element={<Soundspace />} />
          <Route path="/soundspaceux" element={<Soundspaceux />} />
          <Route path="/about" element={<About />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
