import React from "react";
import { useSelector } from "react-redux";

const NotDone = () => {
  const authUser = useSelector((state) => state.authUser.authUser);
  const questions = useSelector((state) => state.questions.questions);
  const users = useSelector((state) => state.users.users);
  const askedQuestions = users[authUser].questions;
  const questionKeys = Object.keys(questions).map((key) => key);
  const notAskedQuestions = questionKeys.filter(
    (ar) => !askedQuestions.find((rm) => rm === ar)
  );

  // var result = questions.filter(obj => {
  //   return obj.b !== 6
  // })

  return (
    <div>
      <h1>DONE</h1>
      <div>
        {askedQuestions.map((q) => (
          <div key={q}>
            <div>{questions[q].optionOne.text}</div>
            <div>OR</div>
            <div>{questions[q].optionTwo.text}</div>
            <br />
          </div>
        ))}
      </div>
      <h1>Not Done</h1>
      <div>
        {notAskedQuestions.map((q) => (
          <div key={q}>
            <div>{questions[q].optionOne.text}</div>
            <div>OR</div>
            <div>{questions[q].optionTwo.text}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotDone;
