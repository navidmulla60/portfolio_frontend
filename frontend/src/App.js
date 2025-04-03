import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Skills from './components/Skills';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router basename="/">
      <Header />
      <Navigation />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;