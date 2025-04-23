import React, { useState, useEffect } from 'react';
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../Context/AuthProvider';
const Navbar = () => {
   const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const element = document.documentElement;
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Courses</a></li>
      <li><a href="/Contact">Contact</a></li>
      <li><a href="/About">About</a></li>
    </>
  );

  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 md:fixed top-0 left-0 right-0 z-10 shadow-lg bg-base-100">
        <div className="navbar shadow-sm">
          {/* Navbar Start (Left Side) */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">Kitab🏠</a>
          </div>

          {/* Navbar Center (Navigation Links) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 mr-5">
              {navItems}
            </ul>
          </div>

          {/* Navbar End (Search, Theme Toggle, Login) */}
          <div className="navbar-end flex items-center gap-2">
            {/* Search Bar */}
            <div className="hidden md:block">
              <label className="input input-bordered flex items-center gap-2">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search..." className="bg-transparent outline-none" />
              </label>
            </div>

          

            {
  authUser ? (
    <Logout />
  ) : (
    // Login Button
    <button
      className="btn btn-outline btn-primary ml-2"
      onClick={() => document.getElementById("my_modal_3").showModal()}
    >
      Login
    </button>
  )
}

            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
