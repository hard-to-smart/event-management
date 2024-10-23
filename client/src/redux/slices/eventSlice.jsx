import { createSlice } from "@reduxjs/toolkit";
import {
  addEvent,
  deleteEvent,
  viewEvents,
  viewAllEvents,
} from "../actions/eventAction";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    eventList: [],
    allEvents: [],
    filteredEvents: [],
    isLoading: false,
    error: null,
    searchKeyword: "",
    priceRange: { min: 0, max: 50000 },
  },
  reducers: {
    filterBySearch: (state, action) => {
      const keyword = action.payload.toLowerCase();
      
      if (!keyword) {
        
        state.filteredEvents = [...state.allEvents];
      } else {
      
      state.filteredEvents =[ ...state.allEvents.filter(
        (event) =>
          event.title.toLowerCase().includes(keyword) ||
          event.description.toLowerCase().includes(keyword)
      )];
      }
    },
    filterByPrice: (state, action) => {
      const { min, max } = action.payload;
      if (min === 0 || max === 50000) {
        state.filteredEvents = [...state.allEvents];
      } else {
      state.filteredEvents = state.filteredEvents.filter(
        (event) => event.price >= min && event.price <= max
      );
      }
    },
    sortByDate: (state) => {
      state.filteredEvents = state.filteredEvents.slice().sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    },
    sortByPrice: (state) => {
      state.filteredEvents = state.filteredEvents.slice().sort((a, b) => {
        return a.price - b.price;
      });
    },

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
        state.eventList = [...state.eventList, action.payload]
        state.allEvents = [...state.allEvents, action.payload]
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.eventList = state.eventList.filter(
          (event) => event.id !== action.payload
        );
      });
  },
});

export const { filterBySearch, filterByPrice , sortByDate, sortByPrice} =
  eventSlice.actions;
export const selectEvents = (state) => state?.events?.eventList || [];
export const selectAllEvents = (state) => state?.events?.allEvents || [];
export default eventSlice.reducer;
