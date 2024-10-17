import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewEvents } from "../redux/actions/eventAction";
import { selectEvents } from "../redux/slices/eventSlice";
import { useParams } from "react-router-dom";
import EventCard from "./EventCard";

const Events = () => {
  const dispatch = useDispatch();
  const categoryId = useParams();
  const events = useSelector(selectEvents);
    useEffect(() => {
    dispatch(viewEvents({category: categoryId}));
  }, [dispatch]);
  
  return (
    <div>
      {events && events.isArray ? (
        events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

export default Events;
