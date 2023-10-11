import React from 'react';
import './Navbar.scss';
import Logo from '../../assest/Logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navitems">

        <div className="logo">
          <div className="logoImage">
            <div className="logoBackground">
              <img src={Logo} alt="logoImage" />
            </div>
          </div>
          <div className='logoText'>
              <h3>Celebal</h3>
              <p>Technologies</p>
          </div>
        </div>

        <div className="search">
          <div className="searchOptions">
            <div className="searchLogo"></div>
            <input type="text" placeholder='search'/>
          </div>
        </div>

        <div className="options">
          <div className="notification"></div>
          <div className="profile"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
