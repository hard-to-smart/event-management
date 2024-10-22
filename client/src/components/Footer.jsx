import React from "react";
import logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoginUser } from "../redux/slices/authSlice";
const Footer = () => {
  const userData = useSelector(selectLoginUser);

  return (
    <footer className="bg-gradient-to-b from-[#4A4A4A] to-[#1F1F1F] font-serif shadow-inner">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        {!userData?.role || userData.role !== 'admin' ? (
          <div className="flex w-full justify-between z-10">
          <Link
            className="flex items-center  sm:mb-0 space-x-3 "
          >
            <img
              src={logo}
              className="h-16 m-0"
              alt="logo"
            /> 
            <span className="self-center text-xl text-white font-semibold whitespace-nowrap"> EVE</span> 
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 cursor-pointer">
            <li>
              <Link to='/' className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to='/category' className="hover:underline me-4 md:me-6">
                Category
              </Link>
            </li>
            <li>
              <Link to='/contact' className="hover:underline me-4 md:me-6">
                Contact Us
              </Link>
            </li>
          </ul>
          </div>
          ): null}
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
