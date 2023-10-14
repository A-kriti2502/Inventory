import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navabar from '../../components/Navbar/Navbar';
import Dashboard from '../../components/Dashboard/Dashboard';
import './Admin.scss';

const Admin = () => {
  return (
    <div className='admin'>
        <Navabar/>
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}

export default Admin
