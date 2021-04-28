import { configureStore } from "@reduxjs/toolkit";

import questionsSlice from "./questions-slice";
import usersSlice from "./users-slice";

export const store = configureStore({
  reducer: { question: questionsSlice.reducer, users: usersSlice.reducer },
});
