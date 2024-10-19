import React from "react";
import {
  selectIsAuthenticated,
  selectLoginUser,
} from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../redux/actions/bookingAction";
import { deleteEvent } from "../../redux/actions/eventAction";

const SingleEventCard = ({event}) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectLoginUser);
  const dispatch = useDispatch();
  const [day, month, year] = event.date.split(' ');
  return (
    <div className="mx-auto h-screen flex items-center w-full justify-center px-8">
      <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
        <div
          className="w-full h-64 bg-top bg-cover rounded-t"
          style={{
            backgroundImage: `url(${event.image })`,
          }}
        ></div>
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">{month}</div>
            <div className="md:text-6xl">{day}</div>
            <div className="md:text-xl">{event.time}</div>
          </div>
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
              {event.title}
            </h2>
            <h3 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-800">
              {event.location}
            </h3>
            <p className="leading-normal">{event.description}</p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
              <div className="flex justify-end">

              {isAuthenticated && (
                  <>
                    {user && user.role === "user" && (
                      <button className="bg-gray-400 uppercase hover:bg-red-500 text-gray-600 font-semibold hover:text-black py-2 px-4 border-2 hover:border-transparent mb-2 mr-4"
                      onClick={()=>dispatch(createBooking({eventId: event._id, userId: user.id}))}>
                        RSVP
                      </button>
                    )}
                    {user && user.role === "admin" && (
                      <button className="bg-gray-400 uppercase hover:bg-red-500 text-gray-600 font-semibold hover:text-black py-2 px-4 border-2 hover:border-transparent mb-2 mr-4"
                      onClick={()=>dispatch(deleteEvent(event._id))}>
                        Delete
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEventCard;
