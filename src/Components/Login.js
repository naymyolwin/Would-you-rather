import React from "react";
import { useDispatch } from "react-redux";
import { authUserActions } from "../store/authUser-slice";
import { users } from "../store/_DATA";

const Login = () => {
  const dispatch = useDispatch();

  const loginUserHandler = (userID) => {
    dispatch(authUserActions.Login(userID));
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>

      {Object.values(users).map((user) => (
        <p key={user.id} onClick={() => loginUserHandler(user.id)}>
          {user.name}
        </p>
      ))}
    </div>
  );
};

export default Login;