import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = () => {

  return (
    <>
    <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    <div
      className="flex flex-col rounded-xl shadow-3xl justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/56314693e4b0f04840290588/1539768566469-X90NEGGS1Q9YOD23DW5T/Screen+Shot+2018-10-17+at+10.29.01.png')`,
      }}
    >
      <div className="flex justify-between items-center ml-4 pr-8">
        <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
          Some information
        </div>
        <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">
          %
        </div>
      </div>
      <div
        className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8"
        style={{
          transform: "translateX(0)",
          animation: "slideIn 0.5s ease-out forwards"
        }}
      >
        <h3 className="text-xl font-bold pb-2">Happy Nowruz 1400</h3>
        <p className="truncate text-gray-500 text-sm">
          Nowruz is the Persian New Year, which begins on the Spring equinox,
          marking the first day of Farvardin, the first month of the Iranian
          solar calendar.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-xs">Have a nice year...</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default CategoryCard;
