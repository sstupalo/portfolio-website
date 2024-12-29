import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import data from './assets/portfolio-content.json';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar data={data.header}/>
        <ContentWrapper>
          <Routes>
            <Route path={data.header.homePath} element={<Home data={data.home}/>}/>
            <Route path={data.header.experiencePath} element={<Experience data={data.experience}/>}/>
            <Route path={data.header.projectsPath} element={<Projects data={data.projects}/>}/>
            <Route path={`${data.header.projectsPath}/:projectId`} element={<Projects data={data.projects}/>}/>
            <Route path={data.header.contactPath} element={<Contact data={data.contact}/>}/>
          </Routes>
        </ContentWrapper>
        <Footer data={data.footer}/>
      </Router>
    </AppContainer>
  );
}

export default App;

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; // Ensures the app takes up at least the full height of the viewport
`;

const ContentWrapper = styled.div`
  flex: 1; // Pushes the footer to the bottom by taking up all available space
`;
