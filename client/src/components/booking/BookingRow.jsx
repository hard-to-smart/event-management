import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBooking } from "../../redux/actions/bookingAction";
import { selectLoginUser } from "../../redux/slices/authSlice";

const BookingRow = ({ booking }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoginUser);
  return (
    <tr className="bg-[#fff5f0] border-b hover:bg-[#f9e8df] transition-all duration-300">
      {" "}
      <td
        scope="row"
        className="flex items-center px-6 py-4 text-gray-700 whitespace-nowrap "
      >
        <div className="ps-3">
          <div className="text-base font-semibold"> Attendee ID</div>
          <div className="font-normal text-gray-500">{booking.user}</div>
        </div>
      </td>
      <td className="px-6 py-4">{booking.event}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
          {booking.status}
        </div>
      </td>
      <td className="px-6 py-4 gap-6 " colSpan={2}>
        <a
          href="#"
          className="font-medium mr-4 text-green-600  hover:underline"
          onClick={() =>
            dispatch(updateBooking({ id: booking._id, action: "approved" }))
          }
        >
          Accept
        </a>
        <a
          href="#"
          className="font-medium text-red-600  hover:underline"
          onClick={() =>
            dispatch(updateBooking({ id: booking._id, action: "rejected" }))
          }
        >
          Reject
        </a>
      </td>
    </tr>
  );
};

export default BookingRow;
