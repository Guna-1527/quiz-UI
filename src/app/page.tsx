import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';


const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
    </div>
  )
}

export default page