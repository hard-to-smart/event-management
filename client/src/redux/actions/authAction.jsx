// login user and logout user

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const loginUser = createAsyncThunk('/auth/loginUser', async (userData, {rejectWithValue}) => {
    try{
        const response = await axios.post('/api/user/login', userData);
        return response.data;
    }
    catch(error){
        return rejectWithValue(error.response.data.message || 'Login failed')
    }
})

export const logoutUser = createAsyncThunk('/auth/logoutUser', async ()=>{
    return {}
})

export const registerUser = createAsyncThunk('/auth/registerUser', async(userData, {rejectWithValue})=>{
    try{
        const response = await axios.post('/api/user/register', userData)
        return response.data
    }
    catch(error){
        return rejectWithValue(error.response.data.message || 'Registration failed')
    }
})

