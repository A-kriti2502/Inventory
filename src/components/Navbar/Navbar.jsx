import React from 'react';
import './Navbar.scss';
import Logo from '../../assest/Logo.svg';
import { AiFillBell, AiOutlineSearch } from 'react-icons/ai';


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
            <AiOutlineSearch size={23}/>
            {/* <div className="searchLogo"></div> */}
            <input type="text" placeholder='search'/>
          </div>
        </div>

        <div className="options">
          <AiFillBell size={30}/>
          <div className="count">5</div>
          {/* <div className="notification"></div> */}
          <div className="profile">AS</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
