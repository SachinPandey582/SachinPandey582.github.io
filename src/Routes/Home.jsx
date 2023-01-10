import React from "react";
import AboutDetails from "../Components/AboutDetails/AboutDetails.jsx";
import Footer from "../Components/Footer/Footer.jsx";

import HeroImage from "../Components/ProfileBack/ProfileBack.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
// import WorkCard from "../Components/WorkCard/WorkCard.jsx";
import Contact from "./Contact.jsx";
import GitCalendar from "./GithubCalender.jsx";
import Project from "./Project.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <AboutDetails/>
      <GitCalendar/>
      <Project/>

      <h1 style={{width:"200px",margin:"auto", marginBottom:"2%"}} >Contact me</h1>
     <Contact/>
      <br /> <Footer />
    </div>
  );
};

export default Home;
