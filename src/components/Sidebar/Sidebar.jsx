import React from 'react';
import './Sidebar.scss';
import { AiFillPieChart, AiOutlineLineChart } from 'react-icons/ai';
import { IoIosSettings } from 'react-icons/io';
import {BiSolidNotification} from 'react-icons/bi';
import {CgArrowsExchangeAlt} from 'react-icons/cg';
import {PiDeviceTabletSpeakerDuotone} from 'react-icons/pi';
import {TbDeviceTabletX} from 'react-icons/tb';
import { BsFillPeopleFill, BsFillClipboardDataFill } from 'react-icons/bs';


const Sidebar = ( {children}) => {
  return (
    <>
      <div className='sidebar'>
        <div className="">
          <ul >
            <li>
              <div className='sidebarItems'>
                <div className="icon"> <AiFillPieChart size={23}/> </div>
                <div className="item">Analytics</div>
              </div>
            </li>
            <li>
              <div className='sidebarItems'>
                <div className="icon"> <BsFillClipboardDataFill size={23}/> </div>
                <div className="item">Inventory</div>
              </div>
              
            </li>
            <li>
              <div className='sidebarItems'>
                <div className="icon"> <BsFillPeopleFill size={23}/> </div>
                <div className="item">Manager Details</div>
              </div>
            </li>
            <li>
              <div className='sidebarItems'>
                <div className="icon"> <IoIosSettings size={23}/></div>
                <div className="item">Maintainence</div>
              </div>
            </li>
            <li>
              <div className='sidebarItems'>
                <div className="icon"> <AiOutlineLineChart size={23}/> </div>
                <div className="item">sales</div>
              </div>
            </li>
            <li >
              <div className='sidebarItems'>
                <div className="icon"> <BiSolidNotification size={23}/> </div>
                <div className="item">Notification</div>
              </div>
            </li>

            <div className='style-notification'></div>
            <div className="style-sidebar"></div>

            <div className='sub-notification'>
                <ul>
                  <li>
                    
                      <div className='subsidebarItems'>
                        <div className="center-subsidebar">
                          <div className="SubIcon"> <CgArrowsExchangeAlt size={20}/> </div>
                          <div className="SubItem">Exchange</div>
                        </div>
                      </div>
                    
                  </li>
                  <li>
                    <div className='subsidebarItems'>
                      <div className="center-subsidebar">
                        <div className="SubIcon"> <PiDeviceTabletSpeakerDuotone size={20}/> </div>
                        <div className="SubItem">Restock</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='subsidebarItems'>
                      <div className="center-subsidebar">
                        <div className="SubIcon"> <TbDeviceTabletX size={20}/> </div>
                        <div className="SubItem">Defect</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
          </ul>
        </div>
      </div>
      {children}
    </>
  )
}

export default Sidebar
