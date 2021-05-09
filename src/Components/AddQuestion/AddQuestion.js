import classes from "./AddQuestion.module.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveQuestion } from "../../store/saveQuestionActions";
import { Link, Redirect } from "react-router-dom";

const AddQuestion = (props) => {
  const authUser = useSelector((state) => state.authUser.authUser);

  const [state, setState] = useState({
    author: authUser,
    optionOneText: "",
    optionTwoText: "",
  });

  const dispatch = useDispatch();
  if (authUser === "") {
    return <Redirect to="/login" />;
  }
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
    setState({
      author: "",
      optionOneText: "",
      optionTwoText: "",
    });
    props.history.push("/");
  };

  return (
    <div className={classes.Container}>
      <h3 className={classes.Title}>Add New Question</h3>
      <form>
        <div>
          <input
            className={classes.Input}
            type="text"
            name="optionOneText"
            placeholder="Option One"
            value={state.optionOneText}
            onChange={inputHandler}
          />
        </div>

        <div>
          <input
            className={classes.Input}
            type="text"
            name="optionTwoText"
            placeholder="Option Two"
            value={state.optionTwoText}
            onChange={inputHandler}
          />
        </div>
        <Link to="/">
          <input
            disabled={
              state.optionOneText === ""
                ? true
                : state.optionTwoText === ""
                ? true
                : false
            }
            className={classes.Submit}
            type="submit"
            onClick={submitHandler}
          />
        </Link>
      </form>
    </div>
  );
};

export default AddQuestion;
