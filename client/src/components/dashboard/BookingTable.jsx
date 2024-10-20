import React from "react";
import Table from "./Table";
import { useSelector } from "react-redux";

const BookingTable = () => {
    const allBookings = useSelector((store) => store.booking.allBookings);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Bookings</h2>
      <Table
        headings={["Booking ID", "User Name", "Event Title"]}
        rows={allBookings?.bookings?.map((booking) => ({
          id: booking._id,
          userName: booking.user.name,
          eventTitle: booking.event.title,
        }))}
      />
    </div>
  );
};

export default BookingTable;
