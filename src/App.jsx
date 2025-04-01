import { useState } from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Skills from './components/Skills';

function App() {
  

  return (
    <div>
      <Sidenav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
