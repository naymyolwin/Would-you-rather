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
    addAnswerToUser(state, action) {
      const authedUser = action.payload.authedUser;
      const qid = action.payload.qid;
      const answer = action.payload.answer;

      state.users[authedUser].answers[qid] = answer;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
