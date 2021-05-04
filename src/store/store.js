import { configureStore } from "@reduxjs/toolkit";

import loginUserSlice from "./login-slice";
import questionsSlice from "./questions-slice";
import usersSlice from "./users-slice";

export const store = configureStore({
  reducer: {
    questions: questionsSlice.reducer,
    users: usersSlice.reducer,
    loginUser: loginUserSlice.reducer,
  },
});
