import React from "react";
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#4A4A4A] to-[#1F1F1F] font-serif shadow-inner">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink
            className="flex items-center  sm:mb-0 space-x-3 "
          >
            <img
              src={logo}
              className="h-16 m-0"
              alt="logo"
            /> 
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> EVE</span> 
          </NavLink>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <NavLink to='/' className="hover:underline me-4 md:me-6">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/category' className="hover:underline me-4 md:me-6">
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className="hover:underline">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[#C5B2A3] sm:mx-auto" />       
        <span className="block text-sm text-stone-200 sm:text-center">          © 2024{" "}
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
