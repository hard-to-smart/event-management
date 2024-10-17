import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({event}) => {

  return (
    <div className="flex flex-col items-center justify-center w-fit p-2.5 pb-6 bg-white rounded-md shadow-xl">
      <img
        className="object-cover w-[300px] h-[300px]"
        src="https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80"
      />
      <div className="flex flex-row w-full justify-between">
        <div className="text-2xl text-left my-2">
          <h3 className="font-semibold">{event.title} </h3>
          <h3 className="font-semibold">{event.place}</h3>
        </div>
        <div className=" bg-purple-200 text-white my-2 font-semibold text-xl text-right px-4 leading-6">
          <p>{event.date}</p>
          <p>{event.time}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
