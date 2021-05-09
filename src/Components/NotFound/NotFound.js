import classes from "./NotFound.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";

const NotFound = () => {
  const authUser = useSelector((state) => state.authUser.authUser);
  const currentLocation = useLocation();
  if (authUser === "") {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { referrer: currentLocation.pathname },
        }}
      />
    );
  }
  return <div className={classes.notfound}>NOT FOUND</div>;
};

export default NotFound;
