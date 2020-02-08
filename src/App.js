import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';

import About from './components/About';
import MySkills from './components/Skills';
import MyWork from './components/Work';
import HireMe from './components/HireMe';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Header />
        <About />
        <MySkills />
        <MyWork />
        <HireMe />
      <Footer />
    
    </div>
  );
}

export default App;
