import React from "react";

const SingleEventCard = () => {
  return (
    <div className="mx-auto h-screen flex items-center justify-center px-8">
      <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
        <div
          className="w-full h-64 bg-top bg-cover rounded-t"
          style={{backgroundImage:'url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)'}}
        ></div>
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">Jan</div>
            <div className="md:text-6xl">13</div>
            <div className="md:text-xl">7 pm</div>
          </div>
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
              Event Title
            </h2>
            <h3 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-800">
              Venue
            </h3>
            <p className="leading-normal">
              Event Description
            </p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
              <div className="w-1/2 italic">Price</div>
              <div className="w-1/2 flex justify-end">
                <button className="bg-transparent uppercase  hover:bg-red-500 text-gray-100 font-semibold hover:text-black py-2 px-4 border-2 bg-red-500 hover:border-transparent mb-2 mr-4">
                  RSVP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEventCard;
