import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewCategories } from "../../redux/actions/categoryAction";
import { FaArrowDown } from "react-icons/fa";

const SelectCategory = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewCategories());
  }, []);

  const categories = useSelector((store) => store.category.categoryList);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        // If the category is already selected, remove it
        return prevSelected.filter((cat) => cat !== category);
      } else {
        // If not selected, add it
        return [...prevSelected, category];
      }
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="w-full mt-4 bg-white relative">
        
      <header className="flex flex-row justify-between cursor-pointer items-center p-4 hover:bg-gray-200" onClick={toggleDropdown}>
        <h2 className="text-lg font-semibold " >
          Select Categories 
        </h2>
        <FaArrowDown />
      </header>
      <hr className="border-gray-300 mt-2 w-full" />

      {dropdownOpen && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-md mt-2 w-full max-h-60 overflow-y-auto">
          {categories.categories?.map((category) => (
            <div key={category._id} className="flex items-center mb-2 p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                value={category.title}
                checked={selectedCategories.includes(category.title)}
                onChange={handleCategoryChange}
                className="mr-2"
              />
              <label>{category.title}</label>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <h4 className="font-semibold">Selected Categories:</h4>
        <p>{selectedCategories.join(", ") || "None"}</p>
      </div>
    </div>
  );
};

export default SelectCategory;
