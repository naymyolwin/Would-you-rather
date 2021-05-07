import classes from "./LeaderBoard.module.css";
import React from "react";
import { useSelector } from "react-redux";

const LeaderBoard = () => {
  const users = useSelector((state) => state.users.users);

  const topUsers = Object.values(users).map((user) => {
    const asked = user.questions.length;
    const answered = Object.keys(user.answers).length;
    const score = asked + answered;
    const arr = [user.id, score, asked, answered];
    return arr;
  });

  topUsers.sort(function (a, b) {
    return b[1] - a[1];
  });

  console.log(topUsers);

  topUsers.map((user) => console.log(user[0]));

  return (
    <div>
      LEADER BOARD
      {topUsers.map((user) => {
        return (
          <div key={user[0]} className={classes.Card}>
            <img
              className={classes.image}
              src={users[user[0]].avatarURL}
              alt="User Avatar"
            />
            <div className={classes.text}>
              <div className={classes.name}>{users[user[0]].name}</div>
              <div className={classes.asked}>Asked : {user[2]}</div>
              <div className={classes.answered}>Answered : {user[3]}</div>
            </div>
            <div className={classes.score}>{user[1]}</div>
          </div>
        );
      })}
      {/* <div className={classes.Card}>
        <div className={classes.image}></div>
        <div className={classes.text}>
          <div className={classes.name}>Name</div>
          <div className={classes.asked}>Asked</div>
          <div className={classes.answered}>Answered</div>
        </div>
        <div className={classes.score}></div>
      </div> */}
    </div>
  );
};

export default LeaderBoard;
