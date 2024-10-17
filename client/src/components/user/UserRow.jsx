// UserRow.js
import React from "react";

const UserRow = ({ user, handleDelete }) => {
  return (
    <tr>
      <td className="px-6 py-3">{user.name}</td>
      <td className="px-6 py-3">{user.email}</td>
      <td className="px-6 py-3">{user.phone}</td>
      <td className="px-6 py-3">
        <button
          onClick={() => handleDelete(user._id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
