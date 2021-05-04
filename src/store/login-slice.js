import { createSlice } from "@reduxjs/toolkit";

import { loginUser } from "./_DATA";

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState: { loginUser },
  reducers: {
    userLoggedIn(state, actions) {
      state.loginUser = actions.payload;
    },
    userLoggedOut(state) {
      state.loginUser = "";
    },
  },
});

export const loginUserActions = loginUserSlice.actions;

export default loginUserSlice;
