import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewEvents } from "../redux/actions/eventAction";
import { selectEvents } from "../redux/slices/eventSlice";

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  console.log(events);
  useEffect(() => {
    dispatch(viewEvents());
  }, [dispatch]);
  return (
    <div>
      {events.length ? (
        events.map((event) => (
          <div key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

export default Events;
