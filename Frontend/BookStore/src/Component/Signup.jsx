import React from 'react';
import { useForm } from "react-hook-form";
import { Link,Navigate } from 'react-router-dom';
import axios from 'axios';
import  toast from 'react-hot-toast';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = async (data) => {
     const userInfo={
      //it is used to store the user information in the database;
    //  username:data.username,
      fullname:data.fullname,
      email:data.email,
      password:data.password
     };
      await axios.post("https://kitab-ghar-5aef.vercel.app/signup",userInfo)
      //promise is used to handle the response from the server
      .then((res)=>
     {
      console.log(res.data);
      if(res.data)
      {
        toast.success(' Signup Sucessfully  ');
        setTimeout(() => {
           <Navigate to="/" />
          document.getElementById("my_modal_3").close();
        },2000);
         
        window.location.reload();
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user)); 
    }).catch((err)=>
    {
       if(err.response)
       {
        console.log(err);
        toast.error( "Error:User already exists");
       }
     
     });
    // Handle the logic to submit data to your backend or API
  };

  return (
    <div className="flex items-center justify-center md: min-h-screen ">
      <div className="border-2  shadow-lg rounded-lg p-6 w-96 mt-20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Close Modal Button */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>

          {/* Header */}
          <h2 className="font-bold text-lg text-left mb-4">Signup</h2>

          {/* Name Input */}
          <div>
            <label className="block mb-1 mr-100">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("fullname", { required: "Name is required" })}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block mb-1 mr-100">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-1 mr-100">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Signup
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-sm text-left">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
