import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userAction';
import { viewAllBookings } from '../../redux/actions/bookingAction';
import { viewAllEvents } from '../../redux/actions/eventAction'; // Import event action
import Table from '../../components/dashboard/Table';
import Calendar from '../../components/dashboard/Calendar'; // Import CalendarComponent
import UserTable from '../../components/dashboard/UserTable';
import BookingTable from '../../components/dashboard/BookingTable';
import { selectCategoryList } from '../../redux/slices/categorySlice';
import { viewCategories } from '../../redux/actions/categoryAction';
import Cards from '../../components/dashboard/Cards';

const Dashboard = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(viewAllBookings());
    dispatch(viewAllEvents()); 
    dispatch(viewCategories());

  }, [dispatch]);

  return (
    <div className="dashboard-container flex">
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
        <Cards/>
        <Calendar/>
      </div>
    </div>
  );
};

export default Dashboard;
