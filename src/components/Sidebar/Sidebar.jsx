import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItems">
        <ul>
          <li>
            <div className="icon"></div>
            <div className="item">Analytics</div>
          </li>
          <li>
            <div className="icon"></div>
            <div className="item">Inventory</div>
          </li>
          <li>
            <div className="icon"></div>
            <div className="item">Manager Details</div>
          </li>
          <li>
            <div className="icon"></div>
            <div className="item">Maintainence</div>
          </li>
          <li>
            <div className="icon"></div>
            <div className="item">sales</div>
          </li>
          <li>
            <div className="icon"></div>
            <div className="item">Notification</div>
            <div className='notifactionItem'>
              <ul>
                <li>
                  <div className="SubIcon"></div>
                  <div className="SubItem">Exchange</div>
                </li>
                <li>
                  <div className="SubIcon"></div>
                  <div className="SubItem">Restock</div>
                </li>
                <li>
                  <div className="SubIcon"></div>
                  <div className="SubItem">Defect</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
