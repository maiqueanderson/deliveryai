import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import Sabores from "./pages/Sabores/Sabores";
import Sobre from './pages/Sobre/Sobre'
import Cart from './pages/Cart/Cart'
import Status from "./pages/Status/Status";
import Profile from "./pages/Profile/Profile";
import Login from "./auth/Login/Login";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import CardapioAdd from "./pages/Admin/Cardapio/CardapioAdd";
import CardapioRemove from "./pages/Admin/Cardapio/CardapioRemove";
import CardapioAlterar from "./pages/Admin/Cardapio/CardapioAlterar";


const App = () => {
  return (
    <div className='App'>
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Sabores' element={<Sabores />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Status' element={<Status />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/CardapioAdd' element={<CardapioAdd />} />
          <Route path='/CardapioRemove' element={<CardapioRemove />} />
          <Route path='/CardapioAlterar' element={<CardapioAlterar />} />
         
        </Routes>
      </Router>
    </div>
  )
}

export default App;
