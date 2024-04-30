import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Resume />
      <Contact />

    </div>
  );
}

export default App;
