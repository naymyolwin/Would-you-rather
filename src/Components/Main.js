import React from "react";
import { useSelector } from "react-redux";
import AddQuestion from "./AddQuestion";
import Test from "./Test";
// import Done from "./Done";
import NotDone from "./NotDone";

const Main = () => {
  const authUser = useSelector((state) => state.authUser.authUser);

  return (
    <div>
      <h1>User Name : {authUser}</h1>
      <NotDone />
      <AddQuestion />
      <Test />
    </div>
  );
};

export default Main;
