import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Services from './components/Services';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './components/About';
import Features from './components/Features';
import Counters from './components/Counters';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <body data-bs-spy='scroll' data-bs-target='.navbar'>
      <Navbar />
      <Section />
      <Services />
      <About />
      <Features />
      <Counters />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </body>
  );
}

export default App;
