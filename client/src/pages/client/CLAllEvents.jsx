import React, { useEffect } from "react";
import FilteringComponent from "../../components/filter/filterComponent";
import { useDispatch, useSelector } from "react-redux";
import { viewAllEvents } from "../../redux/actions/eventAction";
import EventCard from "../../components/event/EventCard";
import { useNavigate } from "react-router-dom";
import { useIsLoading } from "../../components/loading/LoadingHook";
import Loading from "../../components/loading/Loading";
const CLAllEvents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredEvents = useSelector((store) => store.event.filteredEvents);
  const allEvents = useSelector((store) => store.event.allEvents);
  useEffect(() => {
    dispatch(viewAllEvents());
  }, [dispatch]);

  const handleEventClick = (event) => {
    navigate(`/category/${event.category}/event/${event._id}`, { state: { event } });
  };
  const isLoading= useIsLoading();

  return isLoading ? (
    <Loading />
  ) : 
   (
    <div className="flex flex-row h-[80vh]">
      <FilteringComponent />
      <div className="flex flex-wrap overflow-y-auto justify-center">
        {filteredEvents && filteredEvents.length > 0 ? (
          filteredEvents?.map((event, index) => (
            <EventCard key={index} event={event} handleEventClick={handleEventClick} />
          ))
        ) : allEvents && allEvents.length > 0 ? (
          allEvents?.map((event, index) => {
            <EventCard key={index} event={event} handleEventClick={handleEventClick}/>;
          })
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  );
};

export default CLAllEvents;
