import { usersActions } from "./users-slice";
import { questionsActions } from "./questions-slice";
import { _saveQuestionAnswer } from "./_DATA";

export const saveQuestionAnswer = (authedUser, qid, answer) => {
  return async (dispatch) => {
    const save = async () => {
      return await _saveQuestionAnswer({ authedUser, qid, answer });
    };

    try {
      await save();
      dispatch(usersActions.addAnswerToUser({ authedUser, qid, answer }));
      dispatch(
        questionsActions.addAnswerToQuestion({ authedUser, qid, answer })
      );
    } catch (error) {
      console.log("Something went wrong");
    }
  };
};
