import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    //if login is successful it means we have a user as a action coming
    loginSuccess: (state, action) => {
      state.loading = true;
      state.currentUser = action.payload;
    },
    //if login failed
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
