import React from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../redux/actions/categoryAction";
import { selectLoginUser } from "../../redux/slices/authSlice";

const CategoryCard = ({ title, description, image, _id, handleCardClick }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoginUser);
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
        onClick={() => {
          handleCardClick(title, _id);
        }}
        className="relative flex flex-col border-[16px] hover:border-0 border-[#E9D4C2] justify-end rounded-2xl shadow-3xl bg-cover bg-center sm:w-[350px] h-[300px] text-gray-800 overflow-hidden cursor-pointer transition-transform transform hover:scale-105 duration-300"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0"></div>

        <div
          className="bg-white inset-0 h-fit bg-opacity-75 shadow-md rounded-r-xl p-4 flex flex-col mr-8 mb-8"
          style={{
            transform: "translateX(0)",
            animation: "slideIn 0.5s ease-out forwards",
          }}
        >
          <h3 className="text-xl font-bold pb-2 font-poppins">{title}</h3>
          <p className="truncate text-gray-500 text-sm">{description}</p>
        </div>

        {user && user.role === "admin" && (
          <div className="absolute inset-0 bg-black/30 z-10 text-white flex justify-center items-center gap-10">
            <FaEye
              size={24}
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(title, _id);
              }}
            />
            <FaTrashAlt
              size={24}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteCategory(_id));
              }}
            />
          </div>
        )}

        <div className="absolute inset-0 border-10 border-[#D1C4B1] rounded-xl"></div>
      </div>
    </>
  );
};

export default CategoryCard;
