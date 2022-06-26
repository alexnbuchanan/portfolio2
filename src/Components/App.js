import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About";
import Nav from "./NavBar/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
