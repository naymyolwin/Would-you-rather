import { createSlice } from "@reduxjs/toolkit";

import { users } from "./_DATA";

const usersSlice = createSlice({
  name: "users",
  initialState: { users },
  reducers: {
    test() {
      console.log("users reducer");
    },
  },
});

export const usersReducer = usersSlice.actions.reducers;

export default usersSlice;
