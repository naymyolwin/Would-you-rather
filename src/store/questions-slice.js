import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./_DATA";

const questionsSlice = createSlice({
  name: "questions",
  initialState: { questions },
  reducers: {
    addNewQuestionToQuestion(state, action) {
      const newQ = {
        id: action.payload.id,
        author: action.payload.author,
        timestamp: action.payload.timestamp,
        optionOne: {
          votes: [],
          text: action.payload.optionOne,
        },
        optionTwo: {
          votes: [],
          text: action.payload.optionTwo,
        },
      };
      state.questions[action.payload.id] = newQ;
    },
  },
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice;
