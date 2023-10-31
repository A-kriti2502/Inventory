import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavLayout from './Layout/Layout.jsx';
import Welcome from './pages/Welcome/Welcome.jsx';
import { Protected } from './protected';

import Admin from './pages/AdminDashboard/AdminPage/AdminPage.jsx';
import Analytics from './pages/AdminDashboard/Analytics/Analytics.jsx';
import Inventory from './pages/AdminDashboard/Inventory/Inventory.jsx';
import ManagerDetails from './pages/AdminDashboard/ManagerDetails/ManagerDetails';

import Manager from './pages/ManagerDashboard/ManagerPage/ManagerPage.jsx';
import ManagerInventory from './pages/ManagerDashboard/Inventory/Inventory.jsx';
import ManagerServices from './pages/ManagerDashboard/Services/Services.jsx';
import ManagerMaintenance from './pages/ManagerDashboard/Maintainance/Maintainance.jsx';
import ManagerSales from './pages/ManagerDashboard/Sales/Sales.jsx';

function App() {
  const userRole ='admin';

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='admin/*' element={<Protected userRole={userRole} allowedRoles={['admin']} Cmp={<AdminRoutes userRole={userRole}/>} />} />
          <Route path='manager/*' element={<Protected userRole={userRole} allowedRoles={['manager']} Cmp={<ManagerRoutes userRole={userRole}/>} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AdminRoutes({userRole}) {
  return (
    <NavLayout userRole={userRole}>
      <Routes>
        <Route index element={<Admin />} />
        <Route path='analytics' element={<Analytics />} />
        <Route path='inventory' element={<Inventory />} />
        <Route path='managerDetails' element={<ManagerDetails />} />
      </Routes>
    </NavLayout>
  );
}

function ManagerRoutes({userRole}) {
  return (
    <NavLayout userRole={userRole}>
      <Routes>
        <Route index element={<Manager />} />
        <Route path='inventory' element={<ManagerInventory />} />
        <Route path='services' element={<ManagerServices />} />
        <Route path='maintenance' element={<ManagerMaintenance />} />
        <Route path='sales' element={<ManagerSales />} />
      </Routes>
    </NavLayout>
  );
}

export default App;

