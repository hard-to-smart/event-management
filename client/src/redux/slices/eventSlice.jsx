import { createSlice } from "@reduxjs/toolkit";
import { addEvent, deleteEvent, viewEvents } from "../actions/eventAction";
import { act } from "react";

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    eventList: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewEvents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(viewEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.eventList = action.payload;
      })
      .addCase(viewEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.eventList.push(action.payload); 
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.eventList = state.eventList.filter(
          (event) => event.id !== action.payload
        );
      });
  },
});

export const selectEvents = (state) => state?.events?.eventList || [];
export default eventSlice.reducer;
