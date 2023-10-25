import React from 'react';
import './Profile.scss';
import { RxCross2 } from 'react-icons/rx';

const Profile = ({setProfile}) => {
  const toggleProfile = () => {
    setProfile(false);
  };
  return (
    <>
      <div className='profile'>
        <div className='subprofile'>
          <RxCross2 className='cross' size={23} onClick={toggleProfile}/>
          <div className="icon">AS</div>
          <div className="profileName">AM4029 - Aakriti Abhay Singh</div>
          <div className="email">aakriti.singh@celebaltech.com</div>
          <div className="location">Jaipur</div>

          <div className="buttons">
              <button>My Account</button>
              <button>Logout</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile
