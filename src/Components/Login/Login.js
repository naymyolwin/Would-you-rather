import classes from "./Login.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authUserActions } from "../../store/authUser-slice";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const users = useSelector((state) => state.users.users);
  const authUser = useSelector((state) => state.authUser.authUser);

  const dispatch = useDispatch();

  const loginUserHandler = (userID) => {
    dispatch(authUserActions.Login(userID));
  };

  return authUser === "" ? (
    <div>
      <h2>Please login</h2>

      {users &&
        Object.values(users).map((user) => (
          <div
            className={classes.Container}
            key={user.id}
            onClick={() => loginUserHandler(user.id)}
          >
            <img
              className={classes.image}
              src={user.avatarURL}
              alt="User Avatar"
            />

            <div className={classes.name}>{user.name}</div>
          </div>
        ))}
    </div>
  ) : (
    <Redirect to={props.location.state.referrer} />
  );
};

export default Login;
