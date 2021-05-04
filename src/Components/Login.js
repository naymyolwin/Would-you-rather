import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserActions } from "../store/login-slice";

const Login = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const loginUserHandler = (userID) => {
    dispatch(loginUserActions.userLoggedIn(userID));
  };

  console.log(users);
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
