import React from 'react';
import './Notification.scss';
import { RxCross2 } from 'react-icons/rx';

const Notification = ({setNotification}) => {
  const toggleNotification = () => {
    setNotification(false);
  };
  return (
    <div className='notification'>
      <div className="card">
      <RxCross2 className='cross' size={23} onClick={toggleNotification}/>
        <div className="subcard">
          <div className="icon">
            <div className="subicon">MG</div>
          </div>
          <div className="text">
            manager sold product 1894
          </div>
        </div>
        
        <div className="subcard">
        <div className="icon">
          <div className="subicon">MG</div>
        </div>
        <div className="text">
          manager sold product 1894
        </div>
      </div>

      </div>
    </div>
  )
}

export default Notification
