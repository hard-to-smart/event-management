import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const viewEvents = createAsyncThunk(
  "/event/viewevents",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get("/api/event/view");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response.data.message || "Unable to fetch events"
      );
    }
  }
);

export const addEvent = createAsyncThunk(
    '/event/addevent', async (eventData, {rejectWithValue}) =>{
        try{
            const response = await axios.post('/api/event/add');
            return response.data;
        }
        catch(error){
            console.log(error);
            return rejectWithValue(
                error.response.data.message || "Event creation failed"
            )
        }
    }
)

export const deleteEvent = createAsyncThunk('/event/deleteevent', async (eventData, {rejectWithValue})=>{
    try{
        const response = await axios.delete('/api/event/delete')
        return response.data;
    }
    catch(error){
        console.log(error);
        return rejectWithValue(
            error.response.data.message || "Event deletion failed"
        )
    }
})
