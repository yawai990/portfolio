import React from 'react';

import { Navbar, Home, Skills, About, Contact, Projects } from './component';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
