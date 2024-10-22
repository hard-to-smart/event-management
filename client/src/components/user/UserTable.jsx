import React, { useEffect } from "react";
import UserRow from "./UserRow";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../../redux/actions/userAction";

const UserTable = () => {
  // fetching users from the store and displaying them on page reload
  const { users } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };
  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-semibold ">
        <thead className="text-xs text-white uppercase bg-[#cdb39c]">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              User Email
            </th>
            <th scope="col" className="px-6 py-3">
              User Phone
            </th>
            <th scope="col" className="px-6 py-3" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* mapping the users in rows */}
          {users &&
            users?.map((user) => (
              <UserRow key={user._id} user={user} handleDelete={handleDelete} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
