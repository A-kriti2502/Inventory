import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { sidebarManager } from '../../data/sidebarManager';
import { sidebarAdmin } from '../../data/sidebarAdmin';

const Sidebar = ({ children, userRole }) => {
  const menuItems = userRole === 'admin' ? sidebarAdmin : sidebarManager;
  const [activeLink, setActiveLink]=useState(null);
  const [activeSubLink , setActiveSubLink] = useState(null);
  
  const handleLinkClick = (index) => {
    setActiveLink(index);
    setActiveSubLink(null);
  }
  const handleSubLinkClick = (subIndex) => {
    setActiveSubLink(subIndex);
    setActiveLink(null);
  }
  return (
    <>
      <div className="sidebar">
        <div className="">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                  onClick={() => handleLinkClick(index)}
                  className={activeLink === index ? 'active-link' : ''}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <div className="sidebarItems">
                    <div className="icon">{item.icon}</div>
                    <div className="item">{item.name}</div>
                  </div>
                </NavLink>
                {item.more && (
                  <div className="sub-notification">
                    <ul>
                      <div className="style-sidebar"></div>
                      {item.more.map((subitem, subindex) => (
                        <li key={subindex}>
                          <div className='subsidebarItems'>
                            <NavLink
                             to={subitem.subpath}
                             className={
                              activeSubLink === subindex ? 'subactive-link center-subsidebar' : 'center-subsidebar'
                            }
                             onClick={()=> handleSubLinkClick(subindex)}
                             style={{ textDecoration: 'none', color: 'black' }}>
                              <div className="SubIcon">{subitem.subicon}</div>
                              <div className="SubItem">{subitem.subname}</div>
                            </NavLink>  
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </>
  );
};

export default Sidebar;


