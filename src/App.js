import './App.css';
import Welcome from './pages/Welcome/Welcome.jsx';
import Admin from './pages/Admin/Admin.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Analytics from './pages/Analytics/Analytics';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/'>
            <Route index element={<Welcome />} />
            <Route path='/admin' element={<Admin />}>
              <Route path='analytics' element={<Analytics/>}/>
            </Route>
            <Route path='/manager'>

            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
