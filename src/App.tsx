import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Scroll from './components/Scroll';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Scroll />
    </div>
  );
}

export default App;
