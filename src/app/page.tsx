import React from 'react'
import Hero from './components/Hero';
import Service from './components/Service';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';


const page = () => {
  return (
    <div>
      <Hero />
      <Service />
      <CTA />
      <Testimonials />

    </div>
  )
}

export default page