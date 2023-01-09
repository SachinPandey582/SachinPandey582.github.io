import "./NavbarStyles.css"
import {FaBars, FaTimes} from "react-icons/fa"
import React, { useState } from 'react'
import { Link } from "react-router-dom"

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

    window.addEventListener("scroll",changeColor)
    const handleClick=()=>{
        setClick(!click)
    }
  return (
    <div className={color ? "headerNav headerNav-bg ":" headerNav"}>
        <Link to="/" >
            <h1 >SACHIN</h1>
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
               
            </ul>
            <div className="Hamburger">
       {click ? ((<FaTimes onClick={handleClick} size={20} style={{color:"#fff"}}/>)) : <FaBars onClick={handleClick} size={20} style={{color:"#fff"}}/>}        
                

            </div>
    </div>
  )
}

export default Navbar