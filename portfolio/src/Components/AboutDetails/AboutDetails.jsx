import React from 'react'
import "./AboutDetailsStyles.css"
const AboutDetails = () => {
    return (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2em' }}>About</h1>
         <div  className='AboutContainer'>
         <div   style={{ fontSize: '1.5em',color:"white",display:"flex" ,flexDirection:"column" ,alignItems:"center",marginBottom:"8rem" }}>
         <div className='left'>
         A passionate frontend developer from India,Motivated and innovative aspiring full-stack web developer with hands-on experience in building websites with MERN stack and various web technologies including HTML, CSS, and JS. Curious to learn about emerging web technologies. Looking forward to making a significant contribution to an organization through dedicated effort.

         </div>

<br />
          <div>
          🌱 I’m Sachin Pandey , currently learning React Navtive
          </div>


<div>
💬 Ask me about Coding
</div>

<div>
📄 Know about my experiences https://drive.google.com/file/d/1YfWUwqKsEIGL-rFuGN6AEri6c3m-rhd8/view?usp=sharing

</div>
<div>
📫 How to reach me sachinpandey582@gmail.com

</div>
<div>
💬About my portfolio which i have created from scratch https://sachinpandey582.github.io/

</div>
<br />

<br />
⚡ Fun fact Computer "Bugs" was inspired by a real Insect
         </div>
         <div className='right'>
            <img style={{width:"90%" ,height:"90%"}} src="1111.jpg" alt="imageodme" />
         </div>
         </div>
        </div>
      );
}

export default AboutDetails