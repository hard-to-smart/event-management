// login user and logout user
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../utils/toast";

export const loginUser = createAsyncThunk(
  "/auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {


      console.log(`${import.meta.env.VITE_BASE_URL}/api/user/login`);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/user/login`,
        userData,
        { withCredentials: true } 
      );
      notify(response.data.message, 'success')
      console.log(response.data)
      return response.data;

    } catch (error) {
      notify(error.response?.data?.message || 'Login failed');
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const logoutUser = createAsyncThunk("/auth/logoutUser", async () => {
  return {};
});

export const registerUser = createAsyncThunk(
  "/auth/registerUser",
  async (userData, { rejectWithValue }) => {
    console.log("Register payload (userData):", userData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/user/register`,
        userData
      );
      notify(response?.data?.message, 'success')
      return response.data;
    } catch (error) {
      notify(error.response?.data?.message || 'Registration failed');
      return rejectWithValue(
        error.response.data.message || "Registration failed"
      );
    }
  }
);
