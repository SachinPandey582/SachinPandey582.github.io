import "./HeroStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
<img style={{opacity:"0.6"}} className="into-img" src= "/biForportfolio.jpg"  alt="IntroImage" />
        </div>
        <div className="content">
            <h2 style={{color:"white"}}>HI , I am Sachin Pandey</h2>
            <h1>React Full Stack Developer</h1>
            <Link  to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
            
        </div>
    </div>
  )
}

export default HeroImage