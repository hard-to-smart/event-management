import React from 'react'
import { useSelector } from 'react-redux';
import { selectCategoryList } from '../../redux/slices/categorySlice';

const Cards = ({users, categories, allEvents}) => {
    

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#E8903A] text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl">{users?.length -1 || 0}</p>
        </div>
        <div className="bg-[#82480F] text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Categories</h3>
          <p className="text-2xl">{categories.categories?.length || 0}</p>
        </div>
        <div className="bg-orange-500 text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Events</h3>
          <p className="text-2xl">{allEvents?.length || 0}</p>
        </div>
        {/* <div className="bg-orange-500 text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Bookings</h3>
          <p className="text-2xl">{bookings?.length || 0}</p>
        </div> */}
      </div>
  )
}

export default Cards