import React, { useEffect } from "react";
import BookingInCart from "../../components/cart/BookingInCart";
import { useDispatch, useSelector } from "react-redux";
import { selectUserBookings } from "../../redux/slices/bookingSlice";
import { viewUserBookings } from "../../redux/actions/bookingAction";
import { selectLoginUser } from "../../redux/slices/authSlice";

const CLBookings = () => {
  const userBookings = useSelector(selectUserBookings);
  const user = useSelector(selectLoginUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewUserBookings(user?.id));
  }, []);
  return (
    <div className="w-full p-4  flex justify-center mt-4">
      <div className="w-[70%] flex-col flex justify-between">
        <div className="w-full bg-white p-8 flex  justify-between shadow-xl">
          <p className="uppercase tracking-widest font-bold">My Bookings</p>
        </div>
        <BookingInCart user={user} userBookings={userBookings}/>
      </div>
    </div>
  );
};

export default CLBookings;
