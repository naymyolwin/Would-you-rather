import React from "react";
import { useParams } from "react-router-dom";

const QuestionDetail = () => {
  const params = useParams();

  return (
    <div>
      <div>Question Detail</div>
      <p>{params.question_id}</p>
    </div>
  );
};

export default QuestionDetail;
