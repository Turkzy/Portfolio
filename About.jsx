import React from 'react'
import Image from "../Image/picture.png"
import "./About.css"
import sqlLogo from "../Image/mysql.png"

const About = () => {
  return (
    <div id="about" className='about'>
      <div className='about-title'>About <span className='title-Me'>Me</span></div>
      <div className='about-section'>
        <div className='about-left'>
            <img className="about-image" src={Image}/>
        </div>
        <div className='about-right'>
            <p>Hello! I'm John Albert F. Sison, a passionate Computer Engineering student exploring the world of Frontend & Backend Development.</p>
            <p>Ive already experience creating project that help me grow when i take the subject Software Engineering and Software Design, it became my hobby when i have freetime. Ive already familiar with</p>
            <span className='about-skills'>- <ion-icon name="logo-react"></ion-icon> React JS</span>
            <span className='about-skills'>- <ion-icon name="logo-nodejs"></ion-icon> Node JS</span>
            <span className='about-skills'>- <ion-icon name="logo-javascript"></ion-icon> JavaScript</span>
            <span className='about-skills'>- <img className = "size-sql" src ={sqlLogo}/>MySQL</span>
            <span className='about-skills'>- <ion-icon name="logo-css3"></ion-icon> CSS</span>
        </div>
      </div>
    </div>
  )
}

export default About
