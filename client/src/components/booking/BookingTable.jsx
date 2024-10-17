import React, { useEffect } from "react";
import BookingRow from "./BookingRow";
import { useDispatch, useSelector } from "react-redux";
import { viewAllBookings } from "../../redux/actions/bookingAction";

const BookingTable = () => {
  const bookings = useSelector((store) => store.booking.allBookings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewAllBookings());
  }, []);
  console.log(bookings, "inside booking");
  return (
    <div className="relative overflow-x-auto w-fit h-fit shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-semibold ">
      <thead className="text-xs text-white uppercase bg-[#cdb39c]">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Event Detail
            </th>
            <th scope="col" className="px-6 py-3">
              Request Action
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings &&
            bookings?.bookings?.map((booking, index) => <BookingRow key={index} booking={booking} />)}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
