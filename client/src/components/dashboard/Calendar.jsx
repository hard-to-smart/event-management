import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import { useSelector } from 'react-redux';

const CalendarComponent = ({allEvents}) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (allEvents) {
      const formattedEvents = allEvents?.map((event) => {
        const startDate = new Date(event.date).toISOString().slice(0, 10); 
        const endDate = event.endDate ? new Date(event.endDate).toISOString().slice(0, 10) : startDate;
        return {
          title: event.title,
          start: startDate,
          end: endDate,
          id: event._id,
        };
      });
      setEvents(formattedEvents);
    }
  }, [allEvents]);

  return (
    <div className="calendar-container ">
      <h2 className="text-xl font-semibold mb-2">Events Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]} 
        initialView="dayGridMonth"
        events={events} 
        className="inset-0"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
        }}
      />
    </div>
  );
};

export default CalendarComponent;
