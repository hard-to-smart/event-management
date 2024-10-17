import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { notify } from '../../utils/toast';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_,{rejectWithValue}) => {
  try{
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users/view`, {withCredentials: true}); 
  return response.data;
  }
  catch(error){
    console.log(error);
      notify(error.response?.data?.message || 'Error deleting user');
      return rejectWithValue(
          error.response.data.message || "Error deleting user"
      )
    }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId, {rejectWithValue}) => {
    try{
    await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/users/delete/${userId}`); 
    notify(response?.data?.message, 'success')
    return response.data; 
    }
    catch(error){
      console.log(error);
      notify(error.response?.data?.message || 'Error deleting user');
      return rejectWithValue(
          error.response.data.message || "Error deleting user"
      )
    }
  });
  