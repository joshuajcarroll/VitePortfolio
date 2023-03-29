import { useState } from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Work from './components/Work';

function App() {
  

  return (
    <div>
      <Sidenav />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
