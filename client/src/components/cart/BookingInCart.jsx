import React, { useEffect } from 'react'
import CartEvent from './CartEvent'
import { selectUserBookings } from '../../redux/slices/bookingSlice';
import { useDispatch, useSelector } from "react-redux";
import { viewUserBookings } from '../../redux/actions/bookingAction';
import { selectLoginUser } from '../../redux/slices/authSlice';
const BookingInCart = () => {
    const userBookings = useSelector(selectUserBookings);
    const user = useSelector(selectLoginUser);

    console.log(userBookings);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(viewUserBookings(user?.id));
    }, [])
  return (

      <div className='w-full p-8 mt-5 bg-white rounded-lg shadow-xl'>
        {
          userBookings?.map((eventInCart, index)=>
            <CartEvent 
            key={index} 
            cartItem={eventInCart} 
            />
          )
        }
      </div>
  )
}

export default BookingInCart