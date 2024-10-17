import { createSlice } from "@reduxjs/toolkit";
import { createBooking, viewAllBookings, viewBookingById , updateBooking} from "../actions/bookingAction";

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
          state.userBookings.push(action.payload);
          state.allBookings.push(action.payload);
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
          state.allBookings = action.payload;
        })
        .addCase(viewAllBookings.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  
        // View bookings by user ID
        .addCase(viewBookingById.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(viewBookingById.fulfilled, (state, action) => {
          state.isLoading = false;
          state.userBookings = action.payload;
        })
        .addCase(viewBookingById.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  
        .addCase(updateBooking.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(updateBooking.fulfilled, (state, action) => {
          state.isLoading = false;
          const index = state.userBookings.findIndex((booking) => booking._id === action.payload.id);
          if (index !== -1) {
            state.userBookings[index] = action.payload; 
          }
  
          const allIndex = state.allBookings.findIndex((booking) => booking._id === action.payload.id);
          if (allIndex !== -1) {
            state.allBookings[allIndex] = action.payload; 
          }
        })
        .addCase(updateBooking.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  });
  

export default bookingSlice.reducer;
