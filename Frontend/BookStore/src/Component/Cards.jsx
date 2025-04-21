import React from 'react'
import Lottie from "lottie-react"
import Book3 from './Book3.json'
 function Cards ({item}) {
 console.log(item);
  return (

    <>
    <div className="hover:scale-105 transition duration-300 ease-in-out hover:drop-shadow-[0_35px_35px_rgba(0,0,1,0.25)] hover:shadow-lg flex justify-center items-center">
    <div className="card bg-base-100 w-96 h-96 shadow-2xl mt-10 mb-10 ml-5 mr-5 hover:shadow-2xl transition duration-300-ease-in-out  md:w-96-h-96- shadow-2xl-mt-10-mb-10-ml-5-mr-5-hover:shadow-2xl-transition-duration-300- ease-in-out">
  <figure>
  
       <Lottie animationData={Book3} className="w-[300px] h-[300px] md:w-[200px] md:h-[200px]" /> 
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p className ="text-left">{item.description}</p>
    
    <div className="card-actions justify-end">
    <div className="mr-50  font-bold text-red-500 badge badge-outline ">Price:{item.price}</div>
    <button className="btn btn-dash btn-primary hover:bg-blue-500">BuyNow</button>
    </div>
        
      
      
  </div>
</div>
    </div>
    </>
  );
}              

export default Cards
