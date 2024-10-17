import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({event, handleEventClick}) => {
  return (
    <div className="flex flex-col items-center justify-center w-fit p-2.5 pb-6 bg-white rounded-md shadow-xl"
    onClick={()=>handleEventClick(event)}>
      <img
        className="object-cover w-[300px] h-[300px]" src={event.image}
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
