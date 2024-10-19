import React from 'react'
import BookingInCart from '../../components/cart/BookingInCart'

const CLBookings = () => {
  return (
    <div className="w-full p-4  flex justify-center mt-4">
      <div className="w-[70%] flex-col flex justify-between">
          <div className="w-full bg-white p-8 flex  justify-between shadow-xl">
            <p className="uppercase tracking-widest font-bold">My Bookings</p>
          </div>
          <BookingInCart/>
        </div>
    </div>
  )
}

export default CLBookings