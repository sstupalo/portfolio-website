import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
// import Awards from './components/awards/Awards';
import Footer from './components/footer/Footer'
import data from './assets/portfolio-content.json'


function App() {
  return (
    <Router>
      <Navbar data={data.header}/>
      <Routes>
        <Route path={data.header.homePath} element={<Home data={data.home}/>}/>
        <Route path={data.header.experiencePath} element={<Experience data={data.experience}/>}/>
        <Route path={data.header.projectsPath} element={<Projects data={data.projects}/>}/>
        {/* <Route path={data.header.awardsPath} element={<Awards data={data.awards}/>}/> */}
      </Routes>
      <Footer data={data.footer}/>
    </Router>
  );
}

export default App;