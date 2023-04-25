import About from "./Components/About";
import Navbar from "./Components/Navbar";
import "./App.css";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import GitCalendar from "./Components/GitCalendar";
import ProjectCard from "./Components/NewCard";
import Skills1 from "./Components/Skill1";


function App() {
  // document.addEventListener("contextmenu", (event) => {
  //   event.preventDefault();
  // });
  return (
    <>
      <Navbar />
      <About />
      {/* <Skills /> */}
      <Skills1/>
      <Projects />
      <GitCalendar />
      <Contact />
     
     
    </>
  );
}

export default App;
