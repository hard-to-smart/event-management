import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated, selectLoginUser } from '../redux/slices/authSlice';


const AdminRoute = ({ element }) => {

    const user = useSelector(selectLoginUser);

    const isAdmin = user?.role === 'admin'
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return isAuthenticated && isAdmin ? element : <Navigate to="/" />;
};

export default AdminRoute;
