import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navabar from '../../components/Navbar/Navbar';
import Dashboard from '../../components/Dashboard/Dashboard';

const Manager = () => {
  return (
    <div className='manager'>
        <Navabar/>
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}

export default Manager
