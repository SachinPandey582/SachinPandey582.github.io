import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StartPage from '../Components/StartPage/StartPage.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import Project from './Project.jsx'

const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path='/' element={<StartPage/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes