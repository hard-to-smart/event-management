import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewEvents } from "../redux/actions/eventAction";
import { useNavigate, useParams } from "react-router-dom";
import EventCard from "./EventCard";

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
        <p>No events available</p>
      )}
    </div>
  );
};

export default Events;
