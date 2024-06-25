import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
