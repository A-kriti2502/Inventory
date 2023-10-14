import './App.css';
import Welcome from './pages/Welcome/Welcome.jsx';
import Admin from './pages/Admin/Admin.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/'>
            <Route index element={<Welcome />} />
{/* admin routes */}
            <Route path='/admin' element={<Admin/>}>

            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
