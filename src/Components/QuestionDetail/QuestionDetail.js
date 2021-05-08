import classes from "./QuestionDetail.module.css";
import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveQuestionAnswer } from "../../store/saveQuestionAnswerActions";

const QuestionDetail = (props) => {
  const qid = useParams();
  let { voted } = useLocation();
  const users = useSelector((state) => state.users.users);
  const questions = useSelector((state) => state.questions.questions);
  const authedUser = useSelector((state) => state.authUser.authUser);
  const authorID = questions[qid.question_id].author;
  const questionID = questions[qid.question_id].id;
  const dispatch = useDispatch();

  const [state, setState] = useState({
    authedUser: authedUser,
    qid: questionID,
    answer: "",
  });

  console.log(authedUser, questionID, state.answer);

  const inputHandler = (e) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      answer: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveQuestionAnswer(authedUser, questionID, state.answer));
    setState({
      authedUser: authedUser,
      qid: "",
      answer: "",
    });
    voted = "true";
  };

  return (
    <div>
      <h2>Question Detail</h2>
      <div className={classes.Card}>
        <div className={classes.top}>
          <img
            className={classes.image}
            src={users[authorID].avatarURL}
            alt="User Avatar"
          />
          <div className={classes.name}>
            <div>{users[authorID].name}</div>
            <div>Would you rather</div>
          </div>
        </div>

        <form className={classes.form}>
          <div className={classes.formcheck}>
            <label>
              <input
                type="radio"
                name="option"
                className="form-check-input"
                value="optionOne"
                onChange={inputHandler}
              />
              {questions[qid.question_id].optionOne.text}
            </label>
          </div>

          <div className={classes.formcheck}>
            <label>
              <input
                type="radio"
                name="option"
                className="form-check-input"
                value="optionTwo"
                onChange={inputHandler}
              />
              {questions[qid.question_id].optionTwo.text}
            </label>
          </div>
        </form>
        <div>
          <input
            disabled={state.answer === "" ? true : false}
            className={classes.vote}
            type="submit"
            onClick={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
