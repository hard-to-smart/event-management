import React from "react";
import { useDispatch } from "react-redux";
import { updateBooking } from "../../redux/actions/bookingAction";

const BookingRow = ({ _id, status, event, user, category }) => {
  // passing the updatebooking payload through dispatch and updating page on change of status
  const dispatch = useDispatch();

  return (
    <tr className="bg-[#fff5f0] border-b hover:bg-[#f9e8df] transition-all duration-300">
      <td
        scope="row"
        className="flex items-center px-6 py-4 text-gray-700 whitespace-nowrap "
      >
        <div className="ps-3">
          <div className="text-base font-semibold"> Attendee ID</div>
          <div className="font-normal text-gray-500">{user.name}</div>
        </div>
      </td>
      <td className="px-6 py-4">{event.title}</td>
      <td className="px-6 py-4">{category.title}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className={`h-2.5 w-2.5 rounded-full me-2 ${status === 'pending' ? 'bg-yellow-400' : status === "rejected" ? 'bg-red-500': 'bg-green-500'} ` }></div>
          {status}
        </div>
      </td>
      <td className="px-6 py-4 gap-6 " colSpan={2}>
        <button
          className="font-medium mr-4 text-green-600  hover:underline"
          onClick={() =>
            dispatch(updateBooking({ id: _id, action: "approved" }))
          }
        >
          Accept
        </button>
        <button
          className="font-medium text-red-600  hover:underline"
          onClick={() =>
            dispatch(updateBooking({ id: _id, action: "rejected" }))
          }
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default BookingRow;
