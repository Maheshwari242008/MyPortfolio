// >import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Skills from "./Components/skills/skills"
import Project from "./Components/projects/project";
import Contact from "./Components/Contact/contact";
// import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
