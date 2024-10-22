import React from 'react'

const Cards = ({users, categories, allEvents}) => {
    

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
       <div className="bg-[#e39a9c] text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl">{users?.length -1 || 0}</p>
        </div>
        <div className="bg-[#9a9ce3] text-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Categories</h3>
          <p className="text-2xl">{categories?.length || 0}</p>
        </div>
        <div className="bg-[#d3e39a] text-white p-4 rounded shadow">
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