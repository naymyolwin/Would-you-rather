import React from "react";

const Done = () => {
  const addQestionHandler = () => {
    console.log("adding question");
  };

  return (
    <div>
      <h1>DONE</h1>
      <p onClick={addQestionHandler}>Add Question</p>
    </div>
  );
};

export default Done;
