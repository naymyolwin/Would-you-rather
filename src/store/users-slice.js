import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { users: {} },
  reducers: {
    addQuestionToUser(state, action) {
      state.users[action.payload.author].questions.push(action.payload.id);
    },
    initilizeData(state, action) {
      state.users = action.payload;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
