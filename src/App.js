import About from "./Components/About";
import Navbar from "./Components/Navbar";
import "./App.css";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import GitCalendar from "./Components/GitCalendar";
import ProjectCard from "./Components/NewCard";


function App() {
  // document.addEventListener("contextmenu", (event) => {
  //   event.preventDefault();
  // });
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <GitCalendar />
      <Contact />
     
     
    </>
  );
}

export default App;
