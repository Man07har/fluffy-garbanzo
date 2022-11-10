import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Happen from './components/Happen';


export default function App() {
  return (
    <div>
    <Navbar />
      <Hero />
      <About />
      <Services />
      <Happen />
      <div className='h-[50px]'></div>
      <Footer />
    </div>
  )
}