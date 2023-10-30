import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar>
        <Sidebar>
            <main>{children}</main>
        </Sidebar>
      </Navbar>
    </div>
  );
}

export default Layout;
