import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewCategories } from "../../redux/actions/categoryAction";
import { selectCategoryList } from "../../redux/slices/categorySlice";
import { addEvent } from "../../redux/actions/eventAction";

const EventForm = ({onClose}) => {
  const dispatch = useDispatch();
  const categoryList = useSelector(selectCategoryList);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    date: "",
    time: "",
    location: "",
    category: "",
  });

  useEffect(() => {
    dispatch(viewCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    dispatch(addEvent(formData))
    onClose();
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form className="text-center" onSubmit={handleEventSubmit}>
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Create New Event
            </h1>
            <div className="py-2 text-left">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                placeholder="Title"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                placeholder="Description"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                placeholder="Image URL"
              />
            </div>
            <div className="flex">
            <div className="w-1/2 py-2 text-left">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
              />
            </div>
            <div className="w-1/2 py-2 text-left">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
              />
            </div>
            </div>
            <div className="py-2 text-left">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
                placeholder="Location"
              />
            </div>
            <div className="py-2 text-left">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
              >
                <option value="">Select Category</option>
                {categoryList.categories &&
                  categoryList.categories.map((category) => (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  ))}
              </select>
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
              >
                Create New Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EventForm;
