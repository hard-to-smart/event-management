import { createSlice } from "@reduxjs/toolkit";
import { createBooking, viewAllBookings, viewBookingById } from "../actions/bookingAction";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookingsList: [],
    isLoading: false,
    userBookings: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        (state.isLoading = false), (state.error = null);
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(viewAllBookings.pending, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(viewAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookings = action.payload;
      })
      .addCase(viewAllBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
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
      });
  },
});

export default bookingSlice.reducer;
