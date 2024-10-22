import { createSlice } from "@reduxjs/toolkit";
import {
  createBooking,
  viewAllBookings,
  viewUserBookings,
  updateBooking,
} from "../actions/bookingAction";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    allBookings: [],
    userBookings: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allBookings = [...state.allBookings, action.payload];
        state.userBookings = [...state.userBookings, action.payload];
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // View all bookings
      .addCase(viewAllBookings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(viewAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allBookings = action.payload.bookings;
      })
      .addCase(viewAllBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // View bookings by user ID
      .addCase(viewUserBookings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(viewUserBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userBookings = action.payload;
      })
      .addCase(viewUserBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allBookings = state.allBookings.map((booking) => {
          return booking._id === action.payload._id ? action.payload : booking;
        });

        state.userBookings = state.userBookings.map((booking) => {
          return booking._id === action.payload._id ? action.payload : booking;
        });
      })
      .addCase(updateBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectUserBookings = (state) => {
  return state.booking.userBookings;
};
export default bookingSlice.reducer;
