import classes from "./QuestionDetail.module.css";
import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveQuestionAnswer } from "../../store/saveQuestionAnswerActions";

const QuestionDetail = () => {
  const qid = useParams();
  const { voted } = useLocation();
  const users = useSelector((state) => state.users.users);
  const questions = useSelector((state) => state.questions.questions);
  const authedUser = useSelector((state) => state.authUser.authUser);
  const authorID = questions[qid.question_id].author;
  const QuestionId = questions[qid.question_id].id;
  const dispatch = useDispatch();

  const [vote, setVote] = useState(voted);
  let [answer, setAnswer] = useState("");

  const inputHandler = (e) => {
    const { value } = e.target;
    setAnswer(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveQuestionAnswer(authedUser, QuestionId, answer));
    setAnswer("");
    setVote("true");
    yourVote = answer;
  };

  let yourVote = "";
  let optionOneVote = 0;
  let optionTwoVote = 0;

  const array = Object.values(users).map((user) => {
    const ansObj = Object(user.answers);
    const result = ansObj.hasOwnProperty(QuestionId);

    if (result) {
      const list = [];
      list.push(user.id, ansObj[QuestionId]);
      return list;
    }
    return null;
  });

  var filtered = array.filter(function (el) {
    return el;
  });

  filtered.forEach((user) => {
    if (user[0] === authedUser) {
      if (user[1] === "optionOne") {
        yourVote = "optionOne";
        optionOneVote++;
      } else {
        yourVote = "optionTwo";
        optionTwoVote++;
      }
    } else {
      if (user[1] === "optionOne") {
        optionOneVote++;
      } else {
        optionTwoVote++;
      }
    }
  });

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
          {vote === "true" ? <div className={classes.voted}>Voted</div> : null}
        </div>

        <form className={classes.form}>
          <div className={classes.formcheck}>
            <label className={classes.label}>
              <input
                defaultChecked={vote === "true" && yourVote === "optionOne"}
                disabled={vote === "true" ? true : false}
                type="radio"
                name="option"
                className={classes.formInput}
                value="optionOne"
                onChange={inputHandler}
              />
              {questions[qid.question_id].optionOne.text}
            </label>
            {vote === "true" ? (
              <p className={classes.votePercent}>
                {optionOneVote}/{optionOneVote + optionTwoVote} voted,{" "}
                {(
                  (optionOneVote / (optionOneVote + optionTwoVote)) *
                  100
                ).toFixed(2)}
                %
              </p>
            ) : null}
          </div>

          <div className={classes.formcheck}>
            <label className={classes.label}>
              <input
                defaultChecked={vote === "true" && yourVote === "optionTwo"}
                disabled={vote === "true" ? true : false}
                type="radio"
                name="option"
                className={classes.formInput}
                value="optionTwo"
                onChange={inputHandler}
              />
              {questions[qid.question_id].optionTwo.text}
            </label>
            {vote === "true" ? (
              <p className={classes.votePercent}>
                {optionTwoVote}/{optionOneVote + optionTwoVote} voted,{" "}
                {(
                  (optionTwoVote / (optionOneVote + optionTwoVote)) *
                  100
                ).toFixed(2)}
                %
              </p>
            ) : null}
          </div>
        </form>
        <div>
          {vote === "false" ? (
            <input
              disabled={answer === "" ? true : false}
              className={classes.submit}
              type="submit"
              onClick={submitHandler}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
