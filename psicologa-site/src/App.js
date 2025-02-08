import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChiSono from './pages/ChiSono';
import PrenotaAppuntamento from './pages/PrenotaAppuntamento';
import Contatti from './pages/Contatti';
import Blog from './pages/Blog';
import CookieBanner from './components/CookieBanner';
import './App.css'
function App() {
  return (
    <Router className="App">
      <Navbar />
      <div className="content" style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-sono" element={<ChiSono />} />
          <Route path="/prenota-appuntamento" element={<PrenotaAppuntamento />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <CookieBanner />
    </Router>
  );
}

export default App;
