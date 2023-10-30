import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavLayout from './Layout/Layout.jsx';
import Welcome from './pages/Welcome/Welcome.jsx';

import Admin from './pages/AdminDashboard/AdminPage/AdminPage.jsx';
import Analytics from './pages/AdminDashboard/Analytics/Analytics.jsx';
import Inventory from './pages/AdminDashboard/Inventory/Inventory.jsx';
import ManagerDetails from './pages/AdminDashboard/ManagerDetails/ManagerDetails';

import Manager from './pages/ManagerDashboard/ManagerPage/ManagerPage.jsx';
import ManagerInventory from './pages/ManagerDashboard/Inventory/Inventory.jsx';
import ManagerServices from './pages/ManagerDashboard/Services/Services.jsx';
import ManagerMaintainance from './pages/ManagerDashboard/Maintainance/Maintainance.jsx';
import ManagerSales from './pages/ManagerDashboard/Sales/Sales.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='admin/*' element={<AdminRoutes />} />
          <Route path='manager/*' element={<ManagerRoutes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AdminRoutes() {
  return (
    <NavLayout>
      <Routes>
        <Route index element={<Admin />} />
        <Route path='analytics' element={<Analytics />} />
        <Route path='inventory' element={<Inventory />} />
        <Route path='managerDetails' element={<ManagerDetails />} />
      </Routes>
    </NavLayout>
  );
}
function ManagerRoutes() {
  return(
    <NavLayout>
      <Routes>
        <Route index element ={<Manager/>}/>
        <Route path='inventory' element ={<ManagerInventory/>}/>
        <Route path='services' element ={<ManagerServices/>}/>
        <Route path='maintainance' element ={<ManagerMaintainance/>}/>
        <Route path='sales' element ={<ManagerSales/>}/>
      </Routes>
    </NavLayout>
  )
}
export default App;
