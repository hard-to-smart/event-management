import SideNavbar from '../../components/SideNavbar'
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import { useSelector } from 'react-redux';

const Dashboard = () => {
  // const bookings = useSelector(state => state.bookings.allBookings); 
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   if (bookings) {
  //     const formattedEvents = bookings.map(booking => ({
  //       title: booking.event.title, 
  //       start: booking.event.date, 
  //       end: booking.event.endDate || booking.event.date,
  //       id: booking._id, 
  //     }));
  //     setEvents(formattedEvents);
  //   }
  // }, [bookings]);

  return (
    <div className="calendar-container">
      {/* <FullCalendar
        plugins={[dayGridPlugin]}       // Use dayGridPlugin for month view
        initialView="dayGridMonth"      // Set initial view to month
        events={events}                 // Pass formatted events to the calendar
        headerToolbar={{                // Customize the header toolbar
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        eventTimeFormat={{              // Customize time display in the calendar
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false
        }}
      /> */}
     </div>
  );
};

export default Dashboard