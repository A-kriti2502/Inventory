import React, { useState } from 'react';
import './Navbar.scss';
import Logo from '../../assest/Logo.svg';
import { AiFillBell, AiOutlineSearch } from 'react-icons/ai';
import Notification from '../Notification/Notification';
import Profile from '../Profile/Profile';
import MyAccount from '../MyAccount/MyAccount';
import ResetPassword from '../ResetPassword/ResetPassword';


const Navbar = ({children}) => {
  const [ notification ,setNotification ]= useState(false);
  const [ profile , setProfile ]= useState(false);
  const [myaccount , setMyAccount] = useState(false);
  const [resetPassword , setResetPassword] = useState(false);

  const toggleNotification = () => {
    setNotification(!notification);
  };

  const toggleProfile = () => {
    setProfile(!profile);
  };

  return (
    <>
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
            <div className="suboptions">
              <div className="div1" onClick={toggleNotification}>
                <AiFillBell size={30}/>
                <div className="count">5</div>
              </div>
              <div className="div2" onClick={toggleProfile}>
                AS
              </div>
              {/* <AiFillBell size={30}/>
              <div className="count">5</div>
              <div className="profile">AS</div> */}
            </div>
          </div>
        </div>

        {notification && <Notification setNotification={setNotification}/>}
        {profile && <Profile setProfile={setProfile}/>}
        {myaccount && <MyAccount setMyAccount={setMyAccount}/>}
        {resetPassword && <ResetPassword setResetPassword={setResetPassword}/>}
      </div>
      {children}

    </>
  )
}

export default Navbar
