import React from "react";
import {
  selectIsAuthenticated,
  selectLoginUser,
} from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { createBooking } from "../../redux/actions/bookingAction";
import { deleteEvent } from "../../redux/actions/eventAction";
import { notify } from "../../utils/toast";

const SingleEventCard = ({ event }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectLoginUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentDate = new Date();
  const eventDate = new Date(event.date);
  const [day, month, year] = event.date.split(" ");
  const handleDeleteEvent=()=>{
    dispatch(deleteEvent(event._id))
    navigate(-1)
  }
  return (
    <div className="mx-auto min-h-[80vh] flex items-center w-full justify-center px-8">
      <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
        <div
          className="w-full h-64 bg-top bg-cover rounded-t"
          style={{
            backgroundImage: `url(${event.image})`,
          }}
        ></div>
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-[#9a9ce3] rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">{day}</div>
            <div className="md:text-6xl">{month.slice(0,3)}</div>
            <div className="md:text-xl">{event.time}</div>
          </div>
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h2 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
              {event.title}
            </h2>
            <h3 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-800">
              {event.location}
            </h3>
            <h3 className="mb-4 text-lg italic font-medium leading-none tracking-tight text-gray-800">
              Price: Rs. {event.price}
            </h3>
            <p className="leading-normal">{event.description}</p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
              <div className="flex justify-end">
                {isAuthenticated && (
                  <>
                    {user && user.role === "user" && (
                      <button
                        className={`bg-gray-400 uppercase ${
                          eventDate >= currentDate
                            ? "hover:bg-red-500"
                            : "cursor-not-allowed"
                        } text-gray-600 font-semibold hover:text-black py-2 px-4 border-2 hover:border-transparent mb-2 mr-4`}
                        onClick={() => {
                          if (eventDate >= currentDate) {
                            dispatch(
                              createBooking({
                                eventId: event._id,
                                userId: user.id,
                              })
                            );
                          } else {
                            notify("Event bookings closed");
                          }
                        }}
                        disabled={event.date < new Date()}
                      >
                        RSVP
                      </button>
                    )}
                    {user && user.role === "admin" && (
                      <button
                        className="bg-gray-400 uppercase hover:bg-red-500 text-gray-600 font-semibold hover:text-black py-2 px-4 border-2 hover:border-transparent mb-2 mr-4"
                        onClick={handleDeleteEvent}
                      >
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
