import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../utils/toast";


export const viewEvents = createAsyncThunk(
  "event/viewEvents", 
  async ({ category }, { rejectWithValue }) => {
    try {      
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/event/view`, {
        categoryID: category.id 
      });
      
      return response.data.events;
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        error.response.data.message || "Unable to fetch events"
      );
    }
  }
);

export const viewAllEvents = createAsyncThunk( "event/viewAllEvents",
  async(_, {rejectWithValue}) =>{
    try{
      const response= await axios.get(`${import.meta.env.VITE_BASE_URL}/api/event/view-all`)
      console.log(response.data);
      return response.data
    }
    catch(error){
      console.error(error);
      return rejectWithValue(
        error.response.data.message || "Unable to fetch events"
        );
        }
    }
)

export const addEvent = createAsyncThunk(
    '/event/addEvent', async (eventData, {rejectWithValue}) =>{
        try{
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/event/add`, eventData, {withCredentials:true});
            notify(response?.data?.message, 'success')
            return response.data;
        }
        catch(error){
            console.log(error);
            notify(error.response?.data?.message || 'Event creation failed');
            return rejectWithValue(
                error.response.data.message || "Event creation failed"
            )
        }
    }
)

export const deleteEvent = createAsyncThunk('/event/deleteEvent', async (eventData, {rejectWithValue})=>{
    try{
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/event/delete/${eventData}`, {withCredentials:true})
        notify(response?.data?.message, 'success')
        return response.data;
    }
    catch(error){
        console.log(error);
        notify(error.response?.data?.message || 'Event deletion failed');
        return rejectWithValue(
            error.response.data.message || "Event deletion failed"
        )
    }
})
