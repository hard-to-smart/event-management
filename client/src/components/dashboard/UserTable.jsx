import React from "react";
import { useSelector } from "react-redux";
import Table from "./Table";


const UserTable = () => {
    const users = useSelector((state) => state.user.users);
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Users</h2>
      <Table
        headings={["User Name", "Email", "Phone"]}
        rows={users?.slice(0, 5)}
      />
    </div>
  );
};

export default UserTable;
