import React from "react";
import './loading.css'
const Loading = () => {

  return(
    // defining the loader element
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[#DDD0C8]"> 
   <span className="loader"></span>
   </div>
  )
};

export default Loading;