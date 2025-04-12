import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Navigation from './components/Navigation';

import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router basename="/">
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