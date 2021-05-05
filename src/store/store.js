import { configureStore } from "@reduxjs/toolkit";

import authUserSlice from "./authUser-slice";
import questionsSlice from "./questions-slice";
import usersSlice from "./users-slice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    authUser: authUserSlice.reducer,
    questions: questionsSlice.reducer,
  },
});
