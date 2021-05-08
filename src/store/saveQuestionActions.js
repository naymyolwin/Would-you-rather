import { questionsActions } from "./questions-slice";
import { usersActions } from "./users-slice";
import { _saveQuestion } from "./_DATA";

export const saveQuestion = (question) => {
  return async (dispatch) => {
    const save = async () => {
      return await _saveQuestion(question);
    };

    try {
      const response = await save();

      dispatch(questionsActions.addNewQuestionToQuestion(response));
      dispatch(usersActions.addQuestionToUser(response));
    } catch (error) {
      console.log("Something went wrong");
    }
  };
};
