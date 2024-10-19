import React from "react";

const EventCard = ({ event, handleEventClick }) => {
  
  return (
    <div
      className="flex flex-col h-fit m-4 items-center justify-center w-fit p-4 bg-[#C5B2A3] rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
      onClick={() => handleEventClick(event)}
    >
      <img
        className="object-cover w-[300px] h-[200px] rounded-lg shadow-md mb-4"
        src={event.image}
        alt={event.title}
      />
      <div className="flex flex-col w-full">
        <div className="text-left mb-2">
          <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
          <h4 className="text-lg text-gray-600">{event.place}</h4>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="bg-[#E9D4C2] text-gray-800 rounded-md p-2 flex justify-center">
            <p className="font-semibold text-lg">{event.date}</p>
          </div>

          <div className="bg-[#f1f1f1] text-gray-800 rounded-md p-2 flex justify-center">
            <p className="font-semibold text-lg">{event.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
