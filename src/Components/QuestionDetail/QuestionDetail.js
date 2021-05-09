import classes from "./QuestionDetail.module.css";
import React, { useState } from "react";
import { useParams, useLocation, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveQuestionAnswer } from "../../store/saveQuestionAnswerActions";

const QuestionDetail = () => {
  const { question_id } = useParams();
  const currentLocation = useLocation();
  let { voted } = useLocation();
  const users = useSelector((state) => state.users.users);
  const questions = useSelector((state) => state.questions.questions);
  const authedUser = useSelector((state) => state.authUser.authUser);
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");

  if (authedUser === "") {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { referrer: currentLocation.pathname },
        }}
      />
    );
  }

  const existingQuestion = Object.keys(questions).find(
    (question) => question === question_id
  );

  if (existingQuestion === undefined) {
    return (
      <Redirect
        to={{
          pathname: "/notfound",
          state: { referrer: currentLocation.pathname },
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
    yourVote = answer;
  };

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

  let yourVote = "";
  let optionOneVote = 0;
  let optionTwoVote = 0;

  if (voted === undefined) {
    voted = "false";
  }

  filtered.forEach((user) => {
    if (user[0] === authedUser) {
      voted = "true";
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
          {voted === "true" ? <div className={classes.voted}>Voted</div> : null}
        </div>

        <form className={classes.form}>
          <div className={classes.formcheck}>
            <label className={classes.label}>
              <input
                defaultChecked={voted === "true" && yourVote === "optionOne"}
                disabled={voted === "true" ? true : false}
                type="radio"
                name="option"
                className={classes.formInput}
                value="optionOne"
                onChange={inputHandler}
              />
              {questions[question_id].optionOne.text}
            </label>
            {voted === "true" ? (
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
                defaultChecked={voted === "true" && yourVote === "optionTwo"}
                disabled={voted === "true" ? true : false}
                type="radio"
                name="option"
                className={classes.formInput}
                value="optionTwo"
                onChange={inputHandler}
              />
              {questions[question_id].optionTwo.text}
            </label>
            {voted === "true" ? (
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
          {voted === "false" ? (
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
