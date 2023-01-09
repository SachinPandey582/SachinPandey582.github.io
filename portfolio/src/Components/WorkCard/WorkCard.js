import "./WorkCardStyle.css"
import React from 'react'
import { NavLink } from 'react-router-dom'

const WorkCard = () => {
  return (
    <div className='work-container'>
<h1 className="project-heading">
  Projects
</h1>
<div className="project-container">
  <div className="project-card">
    <img src="1.png" alt="first-work" />
    <h2 className='project-title'>
      Project Title
    </h2>
    <div className='pro-details'>
      <p>This is Text</p>
      <div className='pro-btns'>
        <NavLink className="btn" to="www.google.com">
          view
        </NavLink>
        <NavLink className="btn" to="www.google.com">
          source
        </NavLink>
      </div>
    </div>
  </div>
  <div className="project-card">
    <img src="1.png" alt="first-work" />
    <h2 className='project-title'>
      Project Title
    </h2>
    <div className='pro-details'>
      <p>This is Text</p>
      <div className='pro-btns'>
        <NavLink className="btn" to="www.google.com">
          view
        </NavLink>
        <NavLink className="btn" to="www.google.com">
          source
        </NavLink>
      </div>
    </div>
  </div>
  <div className="project-card">
    <img src="1.png" alt="first-work" />
    <h2 className='project-title'>
      Project Title
    </h2>
    <div className='pro-details'>
      <p>This is Text</p>
      <div className='pro-btns'>
        <NavLink className="btn" to="www.google.com">
          view
        </NavLink>
        <NavLink className="btn" to="www.google.com">
          source
        </NavLink>
      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default WorkCard