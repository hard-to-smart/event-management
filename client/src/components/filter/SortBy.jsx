// src/components/sort/SortEvents.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByDate, sortByPrice } from "../../redux/slices/eventSlice";
import { FaArrowDown } from "react-icons/fa";

const SortEvents = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSortByDate = () => {
    dispatch(sortByDate());
    setDropdownOpen(false);
  };

  const handleSortByPrice = () => {
    dispatch(sortByPrice());
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full mt-2">
      <header
        className="flex flex-row justify-between cursor-pointer items-center p-4 hover:bg-gray-200"
        onClick={toggleDropdown}
      >
        <h2 className="text-normal font-semibold ">Sort by</h2>
        <FaArrowDown />
      </header>
      {isDropdownOpen && (
        <div className="absolute z-10 bg-white border rounded-md shadow-lg w-full mt-2">
          <button
            onClick={handleSortByDate}
            className="block w-full text-left p-2 hover:bg-gray-200"
          >
            Sort by Most Recent
          </button>
          <button
            onClick={handleSortByPrice}
            className="block w-full text-left p-2 hover:bg-gray-200"
          >
            Sort by Price
          </button>
        </div>
      )}
    </div>
  );
};

export default SortEvents;
