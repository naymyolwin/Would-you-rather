import classes from "./Login.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authUserActions } from "../../store/authUser-slice";
import { Link } from "react-router-dom";

const Login = () => {
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  const loginUserHandler = (userID) => {
    dispatch(authUserActions.Login(userID));
  };

  return (
    <div>
      <h2>Please login</h2>
      <Link className={classes.Link} to="/">
        {users &&
          Object.values(users).map((user) => (
            <div
              className={classes.Container}
              key={user.id}
              onClick={() => loginUserHandler(user.id)}
            >
              {user.name}
            </div>
          ))}
      </Link>
    </div>
  );
};

export default Login;
