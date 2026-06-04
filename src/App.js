// >import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Skills from "./Components/skills/skills"
import Project from "./Components/projects/project";
// import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
    </div>
  );
}


export default App;
