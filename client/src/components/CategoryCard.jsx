import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../redux/actions/categoryAction";
import { selectLoginUser } from "../redux/slices/authSlice";

const CategoryCard = ({
  title,
  description,
  image,
  _id,
  handleCardClick
}) => {
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
        onClick={()=>{ if(user.role==='admin') handleCardClick(title, _id); else console.log('noting') }}
        className="flex flex-col relative rounded-xl shadow-3xl bg-cover justify-end sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
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
        { user && user.role === 'admin' &&
        <div className="absolute inset-0 bg-black/70 z-0 text-white flex justify-center items-center gap-10"><FaEye size={24} onClick={()=>handleCardClick(title, _id)}/> <FaTrashAlt size={24} onClick={()=> dispatch(deleteCategory(_id))}/></div>
        }
      </div>
    </>
  );
};

export default CategoryCard;
