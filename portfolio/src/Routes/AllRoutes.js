import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StartPage from '../Components/StartPage/StartPage'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Project from './Project'

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