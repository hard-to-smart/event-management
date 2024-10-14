import React from "react";
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#323232] shadow dark:bg-[#323232] ">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink
            className="flex items-center   sm:mb-0 space-x-3 "
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
            {/* <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li> */}
            <li>
              <NavLink to='/about' className="hover:underline">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
