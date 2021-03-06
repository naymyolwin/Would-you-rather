import classes from "./Main.module.css";
import React from "react";
import { useSelector } from "react-redux";
import QuestionCard from "../QuestionCard/QuestionCard";
import { Link, Redirect, useLocation } from "react-router-dom";

const Main = () => {
  const users = useSelector((state) => state.users.users);
  const authUser = useSelector((state) => state.authUser.authUser);
  const questions = useSelector((state) => state.questions.questions);

  const currentLocation = useLocation();

  if (authUser === "") {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { referrer: currentLocation.pathname },
        }}
      />
    );
  }

  const answeredQuestions = Object.keys(users[authUser].answers).map(
    (key) => questions[key]
  );

  answeredQuestions.sort(function (a, b) {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
  const questionKeys = Object.keys(questions).map((key) => questions[key]);
  const notAnsweredQuestions = questionKeys.filter(
    (key) => !answeredQuestions.find((askedKey) => askedKey === key)
  );
  notAnsweredQuestions.sort(function (a, b) {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  return (
    <div>
      <div className={classes.container}>
        <h2>Not Answer</h2>

        {notAnsweredQuestions.map((key) => (
          <Link
            className={classes.Link}
            key={key.id}
            to={{ pathname: `/questions/${key.id}`, voted: "false" }}
          >
            <QuestionCard
              user={users[questions[key.id].author].name}
              optionOne={questions[key.id].optionOne.text}
              optionTwo={questions[key.id].optionTwo.text}
            />
          </Link>
        ))}
      </div>
      <div className={classes.container}>
        <h2>Answered</h2>
        {answeredQuestions.map((key) => (
          <Link
            className={classes.Link}
            key={key.id}
            to={{ pathname: `/questions/${key.id}`, voted: "true" }}
          >
            <QuestionCard
              user={users[questions[key.id].author].name}
              optionOne={questions[key.id].optionOne.text}
              optionTwo={questions[key.id].optionTwo.text}
            />
          </Link>
        ))}
      </div>
      <Link to="/add">
        <button className={classes.fab}>+</button>
      </Link>
    </div>
  );
};

export default Main;
