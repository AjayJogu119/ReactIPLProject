import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
        const [isActive, setIsActive] = useState(false);
      
        const toggleMenu = () => {
          setIsActive(!isActive);
        };
  return (
    <div>
    <div className="container">
      <div className="img-box">
        <img src="public/assets/ipl-logo.png" alt="" />
      </div>
      <div className='menu-box'>
        <ul className={`menu ${isActive ? 'active' : ''}`}>
            <img onClick={toggleMenu} className = 'close' src="/assets/close.png" alt="" />
            <Link to= '/' className='linkStyle'><li>Home</li></Link>
            <Link to= '/teams' className='linkStyle'> <li>Teams</li></Link> 
            <Link to= '/schedule' className='linkStyle'><li>Schedule</li></Link>
            <Link to= '/stats' className='linkStyle'><li>Stats</li></Link>
            <Link to= '/venues' className='linkStyle'><li>Venues</li></Link>
        </ul>
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
          <img src="/assets/burger-menu.png" alt="" />
      </div>
      
    </div>
  </div>
  )
}

export default Navbar
