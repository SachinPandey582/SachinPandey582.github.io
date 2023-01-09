import "./NavbarStyles.css"
import {FaBars, FaTimes} from "react-icons/fa"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Box, Button, Heading } from "@chakra-ui/react"

const Navbar = () => {
    const [click,setClick]=useState(false)
    const [color,setColor]=useState(false)

    const changeColor=()=>{
        if(window.scrollY >=1){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    const handleResume = () => {
        fetch("/Sachin_pandey_resume.pdf").then((res) => {
          res.blob().then((blob) => {
            const fileUrl = window.URL.createObjectURL(blob);
            // create an object for the file.
            let file = document.createElement("a");
            file.href = fileUrl;
            file.download = "/Sachin_pandey_resume.pdf";
            file.click();
          });
        });
      };

    window.addEventListener("scroll",changeColor)
    const handleClick=()=>{
        setClick(!click)
    }
  return (
    <div className={color ? "headerNav headerNav-bg ":" headerNav"}>
        <Link to="/" >
            <Heading>
                    <Box >SACHIN</Box>
                
                </Heading>
        </Link>
            
            <ul className={click ? "nav-menu-nav active" :"nav-menu-nav"}>
            <li >
                    <Link to="/home">Home</Link>
                    </li>
                <li >
                    <Link to="/project">Project</Link>
                    </li>
                <li >
                    <Link to="/about">About</Link>
                    </li>
                <li >
                    <Link  to="/contact">Contact</Link>
                    </li>
                    <li >
                    <Button onClick={handleResume}>Resume</Button>
                    </li>
               
            </ul>
            <div className="Hamburger">
       {click ? ((<FaTimes onClick={handleClick} size={20} style={{color:"#fff"}}/>)) : <FaBars onClick={handleClick} size={20} style={{color:"#fff"}}/>}        
                

            </div>
    </div>
  )
}

export default Navbar