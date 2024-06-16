
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Menu from './components/Menu';
import Contactos from './components/Contactos';
import Creditos from './components/Creditos';
import Navbarprim from './layouts/Navbarprim';
import Footer1 from './layouts/Footer1';
import Socios from './components/Socios';



function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbarprim/>}>
              <Route index element={<Home/>}/>
              <Route path='Menu' element={<Menu/>}/>
              <Route path='Contactos' element={<Contactos/>}/>
              <Route path='Socios' element={<Socios/>}/>
              <Route path='Creditos' element={<Creditos/>}/>
              <Route path='*' element={<Navigate replace to="/"/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer1/>
    </div>
  );
}

export default App;
