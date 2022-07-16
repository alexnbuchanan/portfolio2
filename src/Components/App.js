import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About";
import Nav from "./NavBar/Nav";
import { useEffect } from "react";

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
      <Nav />
      <div id="divContainer">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
