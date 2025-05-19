import "./App.scss";

import Navbar from "../components/Navbar/Navbar.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Experiences from "../pages/Experience/Experiences.jsx";
import Projects from "../pages/Projects/Projects.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Experiences />
      <Projects />
      <div style={{ height: "100vh" }} />
    </>
  );
}

export default App;
