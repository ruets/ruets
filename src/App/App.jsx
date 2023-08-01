import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "../components/navbar/NavBar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Experiences from "../pages/Experiences/Experiences";
import Lang from "../components/lang/Lang";
import Background from "../components/backgound/Background";
import "./App.scss";
import "../i18n";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>

      <Lang />
      {/*<Background />*/}
    </React.Fragment>
  );
}

export default App;
