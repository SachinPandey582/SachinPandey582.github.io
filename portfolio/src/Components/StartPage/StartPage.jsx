import React from 'react'
import "./StartPageStyle.css"
const StartPage = () => {
  return (
    <div className='Check'>
       <header>
      <section class="header-content">
        <img style={{width:"300px"}} className="rocky-dashed animate-pop-in" src="hood1_prev_ui.png" alt='sachin' />
        <h1 className="header-title animate-pop-in">WelCome to My PortFolio</h1>
        <h3 className="header-subtitle animate-pop-in">A useful start for your projects</h3>
        <p className="header-button animate-pop-in"><a href="/home" class="button"> Let's Get started</a></p>
      </section>
    </header>
    </div>
  )
}

export default StartPage