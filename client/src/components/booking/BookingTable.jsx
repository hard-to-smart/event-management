import React, { useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import { useDispatch, useSelector } from "react-redux";
import { viewAllBookings } from "../../redux/actions/bookingAction";
import BookingFilter from "./BookingFilter"; // Import the filter component

const BookingTable = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((store) => store.booking.allBookings);
  const [filteredBookings, setFilteredBookings] = useState(bookings);

  useEffect(() => {
    dispatch(viewAllBookings());
  }, [dispatch]);

  useEffect(() => {
    setFilteredBookings(bookings); 
  }, [bookings]);

  // Function to handle filter changes
  const handleFilterChange = (status) => {
    console.log(status)
    if (status) {
      setFilteredBookings(bookings.filter((booking) => booking.status === status));
    } else {
      setFilteredBookings(bookings); 
    }
  };

  return (
    <div className="relative overflow-x-auto w-fit h-fit shadow-md sm:rounded-lg">
      <BookingFilter onFilterChange={handleFilterChange} />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-semibold ">
        <thead className="text-xs text-white uppercase bg-[#cdb39c]">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Event Name
            </th>
            <th scope="col" className="px-6 py-3">
              Event Category
            </th>
            <th scope="col" className="px-6 py-3">
              Request Status
            </th>
            <th scope="col" className="px-6 py-3">
              Request Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings && filteredBookings.map((booking, index) => (
            <BookingRow key={index} {...booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
