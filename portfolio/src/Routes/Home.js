import React from "react";
import AboutDetails from "../Components/AboutDetails/AboutDetails";
import ContactDetails from "../Components/ContactDetails/ContactDetails";
import Footer from "../Components/Footer/Footer";
import HeroImage from "../Components/HeroFolder/HeroImage";
import Navbar from "../Components/Navbar/Navbar";
import WorkCard from "../Components/WorkCard/WorkCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <AboutDetails/>
      <WorkCard />

      <h1 style={{width:"200px",margin:"auto", marginBottom:"2%"}} >Contact me</h1>
      <ContactDetails/>
      <br />
      <Footer />
    </div>
  );
};

export default Home;
