import React, { useState } from 'react';
import Logo from "../Image/Logo.png"
import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Navbar() {

  const [menu, setMenu] = useState("home");

  return (
    <div className='Navbar'>
        <img className="turkzy" src={Logo} alt=''/>
        <ul className='nav-menu'>
            <li><AnchorLink className="link-menu" href="#home" onClick={()=>setMenu("home")}>Home</AnchorLink>{menu==="home"}</li>
            <li><AnchorLink className="link-menu" href="#about"><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"}</li>
            <li><AnchorLink className="link-menu" href="#mywork"><p onClick={()=>setMenu("mywork")}>Project</p></AnchorLink>{menu==="mywork"}</li>
            <li><AnchorLink className="link-menu" href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"}</li>
        </ul>
    </div>
  )
}

export default Navbar
