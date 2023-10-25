import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navabar from '../../components/Navbar/Navbar';
import Dashboard from '../../components/Dashboard/Dashboard';
import './Admin.scss';

const Admin = () => {
  const [ cmp , setCmp] = useState(0);
  return (
    <div className='admin'>
        <Navabar>
          <Sidebar>
            <Dashboard />
          </Sidebar>
        </Navabar>
    </div>
  )
}

export default Admin
