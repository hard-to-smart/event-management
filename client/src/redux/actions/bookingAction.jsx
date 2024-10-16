import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/booking/create`, bookingData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const viewBookingById = createAsyncThunk(
  "booking/viewBookingByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/booking/view?userId=${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const viewAllBookings = createAsyncThunk(
  "booking/viewAllBookings",
  async ( { rejectWithValue }) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/booking/view-all`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
