import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import Sabores from "./pages/Sabores/Sabores";

const App = () => {
  return (
    <div className='App'>
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Sabores' element={<Sabores />} />
         
        </Routes>
      </Router>
    </div>
  )
}

export default App;
