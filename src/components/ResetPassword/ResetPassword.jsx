import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import './ResetPassword.scss'

const ResetPassword = () => {
  return (
    <div className='resetPassword'>
      <div><RxCross2 className='cross' size={23}/></div>
      <h2>Reset Your Password</h2>
      <div className='content'>
        <div className="div">
            <div className="currentPassword">
                <div className="heading">Current Password</div>
                <input type='text'/>
            </div>
            <div className="hidden"></div>
        </div>
        <div className="div">
            <div className="newPassword">
                <div className="heading">New Password</div>
                <input type='text'/>
            </div>
            <div className="hidden"></div>
        </div>
        <div className="div">
            <div className="confirmPassword">
                <div className="heading">Confirm Password</div>
                <input type='text'/>
            </div>
            <div className="hidden"></div>
        </div>
      </div>
      <div>
        <button className='changeButton'>Change Password</button>
      </div>
    </div>
  )
}

export default ResetPassword
