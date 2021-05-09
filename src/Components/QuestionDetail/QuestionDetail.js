import classes from "./QuestionDetail.module.css";
import React, { useState } from "react";
import { useParams, useLocation, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveQuestionAnswer } from "../../store/saveQuestionAnswerActions";

const QuestionDetail = () => {
  const { question_id } = useParams();
  const { voted } = useLocation();
  const users = useSelector((state) => state.users.users);
  const questions = useSelector((state) => state.questions.questions);
  const authedUser = useSelector((state) => state.authUser.authUser);

  const dispatch = useDispatch();

  const [vote, setVote] = useState(voted);
  let [answer, setAnswer] = useState("");

  if (authedUser === "") {
    return (
      <Redirect
        to={{
          pathname: "/login",
          // state: { referrer: currentLocation },
        }}
      />
    );
  }
  const authorID = questions[question_id].author;
  const inputHandler = (e) => {
    const { value } = e.target;
    setAnswer(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveQuestionAnswer(authedUser, question_id, answer));
    setAnswer("");
    setVote("true");
    yourVote = answer;
  };

  let yourVote = "";
  let optionOneVote = 0;
  let optionTwoVote = 0;

  const array = Object.values(users).map((user) => {
    const ansObj = Object(user.answers);
    const result = ansObj.hasOwnProperty(question_id);

    if (result) {
      const list = [];
      list.push(user.id, ansObj[question_id]);
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
              {questions[question_id].optionOne.text}
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
              {questions[question_id].optionTwo.text}
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
