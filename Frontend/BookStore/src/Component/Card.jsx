import Lottie from 'lottie-react'
import React from 'react'
 import Book1 from './Book1.json'
 import Book2 from './Book2.json'
 import Book3 from './Book3.json'
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import { useState, useEffect } from 'react'
 import Slider from "react-slick";
 import Cards from './Cards';
 import axios from 'axios'

const card = () => {
const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("https://kitab-ghar-5aef.vercel.app/book");
        console.log(res.data);
        const data=res.data.filter((data)=> data.category === "Free");
        setBook(data);
      }catch(error){
        console.log(error);
      }
      
    };
    getBook();
  },[]);
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };  
      
  return (
     <> 
     
     <div>
        <div className="shadow-lg
         bg-base-900 w-50 mt-14 ml:15 md:mt-1">
     <h2 className ="text-2xl text-left ml-6 text-blue-300 font-bold ">Free Book</h2>
     </div>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quis illo quod enim ut. Quo neque repudiandae quis at? Aliquam, dicta. Fuga nemo id doloribus repellat.</p>
     </div>
     <div className ="">
     <Slider {...settings}>
             {book.map((item)=>(
              <Cards item={item}
              key ={item.id}/>
             ))}
          </Slider>
        </div>
        
      
      
      
      </>
  )
}

export default card
