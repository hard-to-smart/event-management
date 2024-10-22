// UserRow.js
import React from "react";

const UserRow = ({ user, handleDelete }) => {
  // handle delete passed from user table to delete user
  return (
    <tr className="bg-[#fff5f0] border-b hover:bg-[#f9e8df] transition-all duration-300">
      <td className="px-6 py-4 text-gray-800">{user.name}</td>
      <td className="px-6 py-4 text-gray-800">{user.email}</td>
      <td className="px-6 py-4 text-gray-800">{user.phone}</td>
      <td className="px-6 py-4 text-gray-800">
        <button
          onClick={() => handleDelete(user._id)}
          className="text-red-600 hover:text-red-800 font-semibold transition-colors duration-300"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
