import React from 'react'
import profile from "../Image/profile.png"
import "./Home.css"

const Profile = () => {
  return (
    <div id="home" className='my-profile'>
        <div className='content-profile'>
            <h1>Hello, It's Me</h1>
            <p className='My-Name'><span className='typing'>John Albert F. Sison</span></p>
            <p>And im beginner in <span className='profile-highlights'>web development</span></p>
            <p>Computer Engineering pursuing to become a Frontend and Backend Developer</p>
        </div>
        <img className='profile' src={profile} alt=''/>
    </div>
  )
}

export default Profile
