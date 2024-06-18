import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <About />
     
      <Portfolio />
      <Experience />
      
      <Projects />
      <Contact />
      <Footer />
        
    </>
  )
}

export default App
