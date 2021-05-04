import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
  name: "authUser",
  initialState: { authUser: "" },
  reducers: {
    Login(state, actions) {
      state.authUser = actions.payload;
    },
    Logout(state) {
      state.authUser = "";
    },
  },
});

export const authUserActions = authUserSlice.actions;

export default authUserSlice;
