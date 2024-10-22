import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../redux/actions/categoryAction';

const CategoryForm = ({ onClose }) => {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.description) newErrors.description = 'Description is required';
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(addCategory(formData));
      onClose(); 
    }
  };
  
  return (
    <section className="flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form className="text-center" onSubmit={handleCategorySubmit}>
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Create New Category
            </h1>

            <div className="py-2 text-left">
              <input
                type="text"
                name="title"
                onChange={handleInputChange}
                className={`bg-gray-200 border-2 ${errors.title ? 'border-red-500' : 'border-gray-100'} focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700`}
                placeholder="Category Title"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            <div className="py-2 text-left">
              <input
                type="text"
                name="description"
                onChange={handleInputChange}
                className={`bg-gray-200 border-2 ${errors.description ? 'border-red-500' : 'border-gray-100'} focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700`}
                placeholder="Category description"
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            <div className="py-2 text-left">
              <input
                type="text"
                name="image"
                onChange={handleInputChange}
                className={`bg-gray-200 border-2 ${errors.image ? 'border-red-500' : 'border-gray-100'} focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700`}
                placeholder="Image Url"
              />
            </div>

            <div className="py-2">
              <button
                type="submit"
                className="bg-[#A67A59] text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:outline-none hover:bg-[#8c6043] transition duration-300"
              >
                Create New Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CategoryForm;
