import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authUserActions } from "../store/authUser-slice";

const Login = () => {
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  const loginUserHandler = (userID) => {
    dispatch(authUserActions.Login(userID));
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>

      {users &&
        Object.values(users).map((user) => (
          <p key={user.id} onClick={() => loginUserHandler(user.id)}>
            {user.name}
          </p>
        ))}
    </div>
  );
};

export default Login;
