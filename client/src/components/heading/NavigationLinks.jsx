import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLinks = ({ userRole }) => {
  return (
    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
      {!userRole || userRole !== "admin" ? (
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 text-[20px] ${
                  isActive ? "text-[#946f54]" : "text-[#b0aead]"
                } lg:bg-transparent font-semibold lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 text-[20px] ${
                  isActive ? "text-[#946f54]" : "text-[#b0aead]"
                } lg:bg-transparent font-semibold lg:p-0`
              }
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 text-[20px] ${
                  isActive ? "text-[#946f54]" : "text-[#b0aead]"
                } lg:bg-transparent font-semibold lg:p-0`
              }
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 text-[20px] ${
                  isActive ? "text-[#946f54]" : "text-[#b0aead]"
                } lg:bg-transparent font-semibold lg:p-0`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
export default NavigationLinks;
