import React, { useEffect } from "react";
import FilteringComponent from "../../components/filter/filterComponent";
import { useDispatch, useSelector } from "react-redux";
import { viewAllEvents } from "../../redux/actions/eventAction";
import EventCard from "../../components/event/EventCard";

const CLAllEvents = () => {
  const dispatch = useDispatch();

  const filteredEvents = useSelector((store) => store.event.filteredEvents);
  const allEvents = useSelector((store) => store.event.allEvents);
  useEffect(() => {
    dispatch(viewAllEvents());
  }, [dispatch]);

  console.log(allEvents, "inside all events");
  return (
    <div className="flex flex-row min-h-[80vh]">
      <FilteringComponent />
      <div className="flex flex-wrap overscroll-y-auto">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : allEvents && allEvents.length > 0 ? (
          allEvents.map((event, index) => {
            <EventCard key={index} event={event} />;
          })
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  );
};

export default CLAllEvents;
