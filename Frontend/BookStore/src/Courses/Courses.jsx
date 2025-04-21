import React from 'react'
import Navbar from '../Component/Navbar'
import Course from '../Component/Course'
import Footer from '../Component/Footer'
 

const Courses = () => {
   
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
    <Course />
    </div>
    
    <Footer />
    </>
  )
}

export default Courses
