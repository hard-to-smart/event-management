import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({
  title,
  description,
  image,
  id,
  handleCardClick
}) => {
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
      <div onClick={()=>handleCardClick(title)}
        className="flex flex-col rounded-xl shadow-3xl bg-cover justify-end sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div
          className="bg-white inset-0 h-fit  bg-opacity-75 shadow-md rounded-r-xl p-4 flex flex-col mr-8 mb-8"
          style={{
            transform: "translateX(0)",
            animation: "slideIn 0.5s ease-out forwards",
          }}
        >
          <h3 className="text-xl font-bold pb-2">{title}</h3>
          <p className="truncate text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
