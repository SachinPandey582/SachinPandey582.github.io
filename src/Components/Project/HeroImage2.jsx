import "./HeroImage2Style.css"
import React from 'react'

const HeroImage2 = () => {
  return (
    <div className="hero">
    <div className="mask">
<img style={{opacity:"0.6"}} className="into-img" src= "background.jpg"  alt="IntroImage" />
    </div>
    <div className="content">
        <h2 style={{color:"white"}}>HI , I am Sachin </h2>
        <h1>Here Are </h1>
       
        
    </div>
</div>
  )
}

export default HeroImage2