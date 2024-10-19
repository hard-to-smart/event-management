import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../utils/toast";

export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async ({ userId, eventId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/booking/create`,
        { userId, eventId },
        { withCredentials: true }
      );
      notify(response?.data?.message, "success");
      return response.data;
    } catch (error) {
      notify(error.response?.data?.message || "Adding booking failed");
      return rejectWithValue(error.response.data);
    }
  }
);

export const viewUserBookings = createAsyncThunk(
  "booking/viewUserBookings",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/booking/view?userId=${userId}`,
        { withCredentials: true }
      );
      notify(response?.data?.message, "success");
      return response.data.bookings
    } catch (error) {
      notify(error.response?.data?.message || "Fetching user bookings failed");
      return rejectWithValue(error.response.data);
    }
  }
);

export const viewAllBookings = createAsyncThunk(
  "booking/viewAllBookings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/booking/view-all`,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      notify(error.response?.data?.message || "Fetching all bookings failed");
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateBooking = createAsyncThunk(
  "booking/updateBooking",
  async ({ id, action }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/booking/${id}`,
        { action },
        { withCredentials: true }
      );
      notify(response?.data?.message, "success");
      return response.data;
    } catch (error) {
      notify(error.response?.data?.message || "Failed to change action status");
      return rejectWithValue(error.response.data);
    }
  }
);
