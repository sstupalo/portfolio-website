import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/experience' />
        <Route path='/projects' />
        <Route path='/awards' />
      </Routes>
    </Router>
  );
}

export default App;