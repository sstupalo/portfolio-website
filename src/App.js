import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Awards from './components/awards/Awards';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/awards' element={<Awards/>}/>
      </Routes>
    </Router>
  );
}

export default App;