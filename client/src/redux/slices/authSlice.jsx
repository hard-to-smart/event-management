import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "../actions/authAction";
// saving auth state in local storage
const setUserInLs = (state) => {
  localStorage.setItem("userAuth", JSON.stringify(state));
};
// getting auth state in local storage
const getUserFromLS = () => {
  const storedState = localStorage.getItem("userAuth");
  if (storedState) {
    try {
      return JSON.parse(storedState);
    } catch (error) {
      console.error("Failed to parse auth data from localStorage", error);
      return { user: null, isAuthenticated: false, isLoading: false, error: null };
    }
  }
  return { user: null, isAuthenticated: false, isLoading: false, error: null };
};
export const authSlice = createSlice({
  name: "auth",
  initialState: getUserFromLS(),
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user= action.payload
        state.isAuthenticated = true;
        setUserInLs(state)

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem('userAuth')
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload
        setUserInLs(state);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectError = (state) => state.auth.error;
export const selectLoginUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;
