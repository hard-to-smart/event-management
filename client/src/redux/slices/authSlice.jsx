import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "../actions/authAction";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    // token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    // clearError: (state) => {
    //     state.error = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        // state.token = action.payload.token;
        state.isAuthenticated = true;
        console.log(action.payload,"in slice")
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        // state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        // state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError} = authSlice.actions;
export const selectError = (state) => state.auth.error;
export const selectLoginUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export default authSlice.reducer;

