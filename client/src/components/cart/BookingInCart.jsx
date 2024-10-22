import React from 'react';
import CartEvent from './CartEvent';
import nodata from '../../assets/nodata.png'

const BookingInCart = ({ user, userBookings }) => {
  return (
    <div className='w-full p-8 mt-5 bg-white rounded-lg shadow-xl'>
      {user && userBookings.length > 0 ? (
        userBookings.map((eventInCart, index) => (
          <CartEvent key={index} cartItem={eventInCart} />
        ))
      ) : (
        <div className="flex flex-col  justify-center w-full items-center mx-auto">
            <img src={nodata} alt="No data" className="w-64 h-64 opacity-60" />
            <p className="text-xl text-gray-400 mt-4">No bookings yet.</p>
          </div>
      )}
    </div>
  );
};

export default BookingInCart;
