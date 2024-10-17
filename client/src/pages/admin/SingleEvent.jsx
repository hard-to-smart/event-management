import React from 'react'
import SingleEventCard from '../../components/SingleEventCard'
import { useLocation } from 'react-router-dom';

const SingleEvent = () => {
  const location = useLocation();
  const { event } = location.state || {};

  return event ? (
    <SingleEventCard event={event} />
  ) : (
    <p>Event details not available</p>
  );
};

export default SingleEvent