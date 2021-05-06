import classes from "./Main.module.css";
import React from "react";
import { useSelector } from "react-redux";
import QuestionCard from "../QuestionCard/QuestionCard";
import { Link } from "react-router-dom";

const Main = () => {
  const users = useSelector((state) => state.users.users);
  const authUser = useSelector((state) => state.authUser.authUser);
  const questions = useSelector((state) => state.questions.questions);

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

  const onClickVoteHandler = () => {
    console.log(notAnsweredQuestions);
  };

  return (
    <div>
      <div className={classes.container}>
        <h2>Not Answer</h2>

        {notAnsweredQuestions.map((key) => (
          <Link
            className={classes.Link}
            key={key.id}
            to={`/questions/${key.id}`}
          >
            <QuestionCard
              qid={questions[key.id].id}
              user={users[questions[key.id].author].name}
              optionOne={questions[key.id].optionOne.text}
              optionTwo={questions[key.id].optionTwo.text}
              onClickVoteHandler={onClickVoteHandler}
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
            to={`/questions/${key.id}`}
          >
            <QuestionCard
              key={key.id}
              qid={questions[key.id].id}
              user={users[questions[key.id].author].name}
              optionOne={questions[key.id].optionOne.text}
              optionTwo={questions[key.id].optionTwo.text}
              onClickVoteHandler={onClickVoteHandler}
            />
          </Link>
        ))}
      </div>

      <button onClick={onClickVoteHandler} className={classes.fab}>
        +
      </button>
    </div>
  );
};

export default Main;
