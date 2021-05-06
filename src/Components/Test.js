import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const users = useSelector((state) => state.users.users);
  const authUser = useSelector((state) => state.authUser.authUser);
  const questions = useSelector((state) => state.questions.questions);

  const askedQuestions = Object.keys(users[authUser].answers).map((key) => key);
  const questionKeys = Object.keys(questions).map((key) => key);
  const notAskedQuestions = questionKeys.filter(
    (ar) => !askedQuestions.find((rm) => rm === ar)
  );

  const onClickVoteHandler = (vote, key) => {
    console.log(`${key} : ${vote}`);
  };

  return (
    <div>
      <h1>TEST</h1>
      <p>
        {authUser} answers {Object.keys(users[authUser].answers).length}{" "}
        questions
      </p>
      {Object.keys(users[authUser].answers).map((key) => {
        return (
          <div key={key}>
            {key} : {users[authUser].answers[key]}
          </div>
        );
      })}

      <hr />
      <h1>Voting</h1>
      <div>
        <p>{users[authUser].name} ask</p>
        <p>Would you rather</p>
        <div>
          {notAskedQuestions.map((key) => (
            <div key={key}>
              <p onClick={() => onClickVoteHandler("optionOne", key)}>
                {questions[key].optionOne.text}
              </p>{" "}
              or{" "}
              <p onClick={() => onClickVoteHandler("optionTwo", key)}>
                {questions[key].optionTwo.text}
              </p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
