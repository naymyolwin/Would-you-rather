import classes from "./QuestionCard.module.css";
import React from "react";

const QuestionCard = (props) => {
  const { user, optionOne } = props;
  return (
    <div className={classes.container}>
      <div className={classes.content}>{user} ask, would you rather</div>
      <br />
      <div className={classes.content}>{optionOne} Or ...</div>
    </div>
  );
};

export default QuestionCard;
