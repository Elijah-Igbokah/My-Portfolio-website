import React from 'react'
import './Navbar.scss'
// Import Images
import facebookIcon from '../../images/facebook.png';
import instagramIcon from '../../images/instagram.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="sidebar">
            {/* Sidebar - hamburger button*/}
        </div>
        <div className="nav-wrapper">
            <div className="nav-logo">Elpis.Tech</div>
            <div className="nav-social">
                <img src={facebookIcon} alt="" />
                <img src={instagramIcon} alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar