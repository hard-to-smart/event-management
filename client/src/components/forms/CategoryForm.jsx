import React from 'react'
import { useDispatch } from 'react-redux';
import { addCategory } from '../../redux/actions/categoryAction';

const CategoryForm = () => {
  const dispatch = useDispatch()
  const handleCategorySubmit=(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const categoryValues = {}
    for(const [name, value] of  formData.entries()){
      categoryValues[name] = value;
    }
    dispatch(addCategory(categoryValues))
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
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Category Title"
            />
          </div>
          <div className="py-2 text-left">
            <input
              type="text"
              name="description"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Category description"
            />
          </div>
          <div className="py-2 text-left">
            <input
              type="text"
              name="imageUrl"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Image Url"
            />
          </div>
          <div className="py-2">
            <button
              type="submit"
              className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
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