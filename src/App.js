import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';

import Projects from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';
import OtherProject from './components/Other/Other';

function App() {
    useEffect(() => {
        const handleScroll = (event) => {
          const targetId = event.target.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
    
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 60, // Adjust offset as needed
              behavior: 'smooth',
            });
          }
        };
        
    
        const links = document.querySelectorAll('nav a');
        links.forEach((link) => {
          link.addEventListener('click', handleScroll);
        });
    
        return () => {
          links.forEach((link) => {
            link.removeEventListener('click', handleScroll);
          });
        };
      }, []);
    return (
        <div className="App">
            <Header />
            <Home/>
            <About />
            <Experience/>
            <Projects />
            <OtherProject/>
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
