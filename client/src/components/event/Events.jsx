import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewEvents } from "../../redux/actions/eventAction";
import { useNavigate, useParams } from "react-router-dom";
import EventCard from "./EventCard";
import nodata from '../../assets/nodata.png'


const Events = () => {
  const dispatch = useDispatch();
  const categoryId = useParams();
  const events = useSelector((store) => store.event);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(viewEvents({ category: categoryId }));
  }, [dispatch]);

  const handleEventClick = (event) => {
    console.log("clicked");
    navigate(`event/${event._id}`, { state: { event } });
  };
  return (
    <div className="flex flex-wrap gap-4">
      {events && events.eventList ? (
        events.eventList.map((event) => (
          <EventCard
            key={event._id}
            event={event}
            handleEventClick={handleEventClick}
          />
        ))
      ) : (
        <div className="flex flex-col w-screen justify-center h-[80vh] items-center">
            <img src={nodata} alt="No data" className="w-64 h-64 opacity-60" />
            <p className="text-xl text-gray-400 mt-4">No events available.</p>
          </div>
      )}
    </div>
  );
};

export default Events;
