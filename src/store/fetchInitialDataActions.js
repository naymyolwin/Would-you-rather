import { _getUsers, _getQuestions } from "./_DATA";
import { questionsActions } from "./questions-slice";
import { usersActions } from "./users-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const getQuestions = async () => {
      return await _getQuestions();
    };
    const getUsers = async () => {
      return await _getUsers();
    };

    try {
      const users = await getUsers();
      const questions = await getQuestions();

      dispatch(questionsActions.initilizeData(questions));
      dispatch(usersActions.initilizeData(users));
    } catch (error) {
      console.log("Something went wrong");
    }
  };
};
