import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCategory } from '../../redux/actions/categoryAction';

const CategoryForm = ({onClose}) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: ""
  })
  const handleInputChange=(e)=>{
   setFormData({...formData, [e.target.name] : e.target.value })
  }

  const handleCategorySubmit=(e)=>{
    e.preventDefault();
    dispatch(addCategory(formData))
    onClose()
  }
  
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
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Category Title"
            />
          </div>
          <div className="py-2 text-left">
            <input
              type="text"
              name="description"
              onChange={handleInputChange}
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Category description"
            />
          </div>
          <div className="py-2 text-left">
            <input
              type="text"
              name="image"
              onChange={handleInputChange}
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
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
  )
}

export default CategoryForm