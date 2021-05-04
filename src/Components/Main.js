import React from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const loggedInUser = useSelector((state) => state.loginUser.loginUser);
  return (
    <div>
      <p>User Name : {loggedInUser}</p>
    </div>
  );
};

export default Main;
