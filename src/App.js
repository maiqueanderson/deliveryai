import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className='App'>
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
         
        </Routes>
      </Router>
    </div>
  )
}

export default App;
