import React, { useState, useEffect } from 'react'
 
import Cards from './Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'
 
const Course = () => {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      }catch(error){
        console.log(error);
      }
      
    };
    getBook();
  },[]);
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <div className="mt-28 item-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl">
                We,re delighted to have you <span className="text-pink-500">Here</span> to learn something new everyday!!!

            </h1>
            <p className="m-6 text-blue-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi exercitationem eum consequuntur mollitia eius rerum. Fugit distinctio consequuntur molestiae aut ratione est, dolorem dignissimos
                </p>
             {/*use Link to navigate to the home page */}  
              <Link to="/"><button className="btn btn-error">Back</button></Link>  
                </div> 
         
   <div className ="grid grid-cols-1 mt-14
   mr-10-ml-2-gap-10 md:grid-cols-3 ">
    {
        book.map((item)=>(
            <Cards item={item}
            key ={item.id}/>
        ))
    }
   </div>

    </div>
    </>
  )
}

export default Course
