// Filter component for booking status
import React, { useState } from "react";

const BookingFilter = ({ onFilterChange }) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (event) => {
    const value = event.target.value;
    setSelectedStatus(value);
    onFilterChange(value); 
  };

  return (
    <div className="mb-4">
      <label htmlFor="statusFilter" className="font-medium mr-2">
        Filter by Status:
      </label>
      <select
        id="statusFilter"
        value={selectedStatus}
        onChange={handleStatusChange}
        className="border rounded p-2"
      >
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default BookingFilter;
