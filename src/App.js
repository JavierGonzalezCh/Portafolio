import React from "react";
import NavMenu from "./components/navmenu"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import About from "./pages/about"
import {Routes, Route} from "react-router-dom";
import "./styles/App.css"

const App = () => { 
  return (
  <>
    <NavMenu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </>
  );
}

export default App;
