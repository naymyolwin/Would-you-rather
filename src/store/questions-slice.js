import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: { questions: {} },
  reducers: {
    addNewQuestionToQuestion(state, action) {
      const newQ = {
        id: action.payload.id,
        author: action.payload.author,
        timestamp: action.payload.timestamp,
        optionOne: {
          votes: [],
          text: action.payload.optionOne.text,
        },
        optionTwo: {
          votes: [],
          text: action.payload.optionTwo.text,
        },
      };
      state.questions[action.payload.id] = newQ;
    },
    initilizeData(state, action) {
      state.questions = action.payload;
    },
  },
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice;
