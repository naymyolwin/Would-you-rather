import { createSlice } from "@reduxjs/toolkit";

import { questions } from "./_DATA";

const questionsSlice = createSlice({
  name: "questions",
  initialState: { questions },
  reducers: {
    test(state) {
      console.log("question reducer");
    },
  },
});

export const questionsReducer = questionsSlice.actions.reducers;

export default questionsSlice;
