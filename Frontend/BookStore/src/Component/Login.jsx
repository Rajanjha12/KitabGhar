import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import  toast from 'react-hot-toast';
import { useAuth } from '../Context/AuthProvider';
const Login = () => {
   
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      //it is used to store the user information in the database;
    //  username:data.username,
   
      email:data.email,
      password:data.password
     };
      await axios.post("https://kitab-ghar-5aef.vercel.app/user/login",userInfo)
      //promise is used to handle the response from the server
      .then((res)=>
     {
      console.log(res.data);
      if(res.data)
      {
        toast.success(' Login Sucessfully  ');
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          
          localStorage.setItem("Users",JSON.stringify(res.data.user)); 
          window.location.reload();
        },3000);
        
      }
      
    }).catch((err)=>
    {
       if(err.response)
       {
        console.log(err);
       toast.error('Error:User already exists');
       setTimeout(() =>{},1000);
       }
     
     })
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Close Button */}
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
          </form>

          {/* Modal Heading */}
          <h2 className="font-bold text-xl mb-4">Login</h2>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block mb-1 font-medium mr-100">Email</label>
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
              <label className="block mb-1 font-medium mr-100">Password</label>
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
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-4 text-sm text-left">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
