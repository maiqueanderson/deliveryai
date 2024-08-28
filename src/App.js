import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import Sabores from "./pages/Sabores/Sabores";
import Sobre from './pages/Sobre/Sobre'
import Cart from './pages/Cart/Cart'
import Status from "./pages/Status/Status";
import Profile from "./pages/Profile/Profile";


const App = () => {
  return (
    <div className='App'>
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Sabores' element={<Sabores />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Status' element={<Status />} />
          <Route path='/Profile' element={<Profile />} />
         
        </Routes>
      </Router>
    </div>
  )
}

export default App;
