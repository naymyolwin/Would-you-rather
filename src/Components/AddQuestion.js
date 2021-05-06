import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveQuestion } from "../store/saveQuestionActions";

const AddQuestion = () => {
  const authUser = useSelector((state) => state.authUser.authUser);
  const questions = useSelector((state) => state.questions.questions);
  const users = useSelector((state) => state.users.users);

  const [state, setState] = useState({
    author: authUser,
    optionOneText: "",
    optionTwoText: "",
  });

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveQuestion(state));
  };

  //console.log(questions);
  return (
    <div>
      <h3>New Question</h3>
      <form>
        <div>
          <input
            type="text"
            name="optionOneText"
            placeholder="Option One"
            value={state.optionOneText}
            onChange={inputHandler}
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            name="optionTwoText"
            placeholder="Option Two"
            value={state.optionTwoText}
            onChange={inputHandler}
          />
        </div>
        <br />
        <div>
          <input type="submit" onClick={submitHandler} />
        </div>
      </form>
      <hr />
      <p>There are total {Object.keys(questions).length} questions</p>
      {Object.keys(questions).map((key) => {
        return <div key={key}> {key} </div>;
      })}
      <hr />
      <p>
        {authUser} asked {users[authUser].questions.length}
      </p>
    </div>
  );
};

export default AddQuestion;
