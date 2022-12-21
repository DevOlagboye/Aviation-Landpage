import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from 'react';
import HeroPage from './Components/HeroPage/HeroPage';
import SuccessPage from './Components/SuccessPage/SuccessPage';



function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HeroPage/>}/>
          <Route path="success" element={<SuccessPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
