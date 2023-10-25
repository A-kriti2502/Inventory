import React from 'react';
import'./MyAccount.scss';
import { RxCross2 } from 'react-icons/rx';

const MyAccount = () => {
  return (
    <div className="myaccount">
        <div><RxCross2 className='cross' size={23}/></div>
        <div className="profilemyAccount">
          <div className="icon">AS</div>
          <div className="profileName">Aakriti Abhay Singh</div>
        </div>
        <div className="content">
          <div className="emailcontent">
            <div className='heading'>Email</div>
            <div className="value">aakriti.singh@celebaltech.com</div>
          </div>
          <div className="contactContent">
            <div className='heading'>Content</div>
            <div className="value">9079814768</div>
          </div>
          <div className="dojContent">
            <div className='heading'>Date Of Joining</div>
            <div className="value">09/07/2023</div>
          </div>
          <div className="EcontactContent">
            <div className='heading'>Emergency Contact</div>
            <div className="value">9414201548</div>
          </div>
          <div className="locationContent">
            <div className='heading'>location</div>
            <div className="value">Jaipur</div> 
          </div>
          <div className="addressContent">
            <div className='heading'>Address</div>
            <div className="value">Flat no: XX , Ashok nagar , sanganer ,  sector X, Delhi</div>
          </div>
        </div>
        <div className='reset'>Reset password</div>
      </div>
  )
}

export default MyAccount
