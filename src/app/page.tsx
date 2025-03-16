import React from 'react'
import Hero from './components/Hero';
import Service from './components/Service';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const page = () => {
  return (
    <div>
      <Navbar />
      <div className=''>
        
      <Hero />
      <Service />
      <CTA />
      <Testimonials />
      <Footer />
      </div>
    </div>
  )
}

export default page