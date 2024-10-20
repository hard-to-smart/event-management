import { createSlice } from "@reduxjs/toolkit";
import { addEvent, deleteEvent, viewEvents, viewAllEvents } from "../actions/eventAction";

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    eventList: [],
    allEvents: [],
    filteredEvents: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    filterBySearch: (state, action) =>{
      const keyword = action.payload.toLowerCase();
      console.log(keyword)
      state.filteredEvents = state.allEvents.filter(event =>
        event.title.toLowerCase().includes(keyword) ||
        event.description.toLowerCase().includes(keyword)
      );
    },
    filterByPrice: (state, action) =>{
      state.filteredEvents = action.payload
    }

  },
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
      .addCase(viewAllEvents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(viewAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allEvents = action.payload;
        state.filteredEvents = action.payload;
      })
      .addCase(viewAllEvents.rejected, (state, action) => {
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

export const { filterBySearch, filterByPrice } = eventSlice.actions;
export const selectEvents = (state) => state?.events?.eventList || [];
export const selectAllEvents = (state) => state?.events?.allEvents || [];
export default eventSlice.reducer;
