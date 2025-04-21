import React from 'react';
import Lottie from "lottie-react";
import Book from "./Book.json";

const Banner = () => {
  return (
    <>
      <div className="Bannner max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center">
        {/* Left Banner */}
        <div className="Left-Banner order-2 w-full md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className=" text-3xl md:text-5xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="m-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi exercitationem eum consequuntur mollitia eius rerum. Fugit distinctio consequuntur molestiae aut ratione est, dolorem dignissimos  
            </p>
            <div className="flex flex-col md:flex-row mt-5 ml-10 space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Please enter email-id"
                className="input input-accent md:w-64"
              />
              <button className="btn btn-secondary">Get Start</button>
            </div>
          </div>
        </div>

        {/* Right Banner with Lottie */}
        <div className="Right-Banner order-1 w-full md:order-2 md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <Lottie animationData={Book} className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]" />
        </div>
      </div>
    </>
  );
};

export default Banner;
