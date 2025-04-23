import React from 'react'
import Navbar from '../Component/Navbar'
import About_section from '../Component/About_section'
import Footer from '../Component/Footer'
const About = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
    <About_section />
    </div>
    
    <Footer />
    </>
  )
}

export default About;
