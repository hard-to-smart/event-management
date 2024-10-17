import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import categoryReducer from './slices/categorySlice';
import eventReducer from './slices/eventSlice';
import bookingReducer from './slices/bookingSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        event: eventReducer,
        booking: bookingReducer,
        user: userReducer
    },
})  
export default store