import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { notify } from '../../utils/toast';
// action to fetch all users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_,{rejectWithValue}) => {
  try{
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users/view`, {withCredentials: true}); 
  return response.data.users;
  }
  catch(error){
    console.log(error);
      notify(error.response?.data?.message || 'Error deleting user');
      return rejectWithValue(
          error.response.data.message || "Error deleting user"
      )
    }
});
// action to delete single
export const deleteUser = createAsyncThunk('users/deleteUser', async (userId, {rejectWithValue}) => {
    try{
    const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/users/delete/${userId}`, {withCredentials:true}); 
    notify(response?.data?.message, 'success')
    return userId
    }
    catch(error){
      notify(error.response?.data?.message || 'Error deleting user');
      return rejectWithValue(
          error.response.data.message || "Error deleting user"
      )
    }
  });
  