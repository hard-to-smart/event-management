import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/userAction";
import { viewAllBookings } from "../../redux/actions/bookingAction";
import { viewAllEvents, viewEvents } from "../../redux/actions/eventAction";
import Table from "../../components/dashboard/Table";
import Calendar from "../../components/dashboard/Calendar";
import UserTable from "../../components/dashboard/UserTable";
import BookingTable from "../../components/dashboard/BookingTable";
import { selectCategoryList } from "../../redux/slices/categorySlice";
import { viewCategories } from "../../redux/actions/categoryAction";
import Cards from "../../components/dashboard/Cards";

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  // const bookings = useSelector((state) => state.booking.allBookings);
  const allEvents = useSelector((state) => state.event.allEvents);
  console.log(allEvents)
  const categories = useSelector((state) => state.category.categoryList);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(viewAllBookings());
    dispatch(viewAllEvents());
    dispatch(viewCategories());
  }, [dispatch]);

  return (
    <div className="dashboard-container w-full min-h-[70%] flex mx-auto">
      <div className="flex-grow p-4 ">
        <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
        <Cards users={users} categories={categories} allEvents={allEvents}/>
        <Calendar allEvents={allEvents}/>
      </div>
    </div>
  );
};

export default Dashboard;
