import React from 'react';
import './Home.scss';
import Welcome from '../Welcome/Welcome';
import Dashboard from '../../components/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Welcome/>}/>
          {/* <Route path='login' element={<Login/>}/> */}
          
          <Route path='/admin'>
            <Route index element={<Dashboard/>} />
            {/* <Route path=':userId' element={<Single/>} /> */}
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Home
