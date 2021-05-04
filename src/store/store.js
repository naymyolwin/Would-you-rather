import { configureStore } from "@reduxjs/toolkit";

import authUserSlice from "./authUser-slice";

export const store = configureStore({
  reducer: {
    authUser: authUserSlice.reducer,
  },
});
