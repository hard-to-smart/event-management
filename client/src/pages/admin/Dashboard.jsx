import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/userAction";
import { viewAllBookings } from "../../redux/actions/bookingAction";
import { viewAllEvents } from "../../redux/actions/eventAction";
import Cards from "../../components/dashboard/Cards";
import CalendarComponent from "../../components/dashboard/Calendar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const allEvents = useSelector((state) => state.event.allEvents);
  
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(viewAllBookings());
    dispatch(viewAllEvents());
  }, [dispatch]);

  return (
    <div className="dashboard-container w-full min-h-[80vh] flex mx-auto flex-col p-4">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <Cards users={users} allEvents={allEvents} />
      <div className="flex-grow">
        <CalendarComponent allEvents={allEvents}/>
      </div>
    </div>
  );
};

export default Dashboard;