import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import './Layout.scss';

const Layout = ({ userRole , children }) => {
  useEffect(()=>{
    console.log('userRole in App:', userRole);
  },[userRole]);

  return (
    <div>
      <Navbar>
        <Sidebar userRole={userRole} >
            <main>{children}</main>
        </Sidebar>
      </Navbar>
    </div>
  );
}

export default Layout;
