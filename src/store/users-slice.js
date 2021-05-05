import { createSlice } from "@reduxjs/toolkit";
import { users } from "./_DATA";

const usersSlice = createSlice({
  name: "users",
  initialState: { users },
  reducers: {
    addQuestionToUser(state, action) {
      state.users[action.payload.author].questions.push(action.payload.id);
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
