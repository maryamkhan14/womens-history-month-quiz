import React from "react";

const QuizCard = ({ card }) => {
  console.log("render");
  return (
    <div>
      <div className="intro">
        <h1>{card.header}</h1>
      </div>
    </div>
  );
};

export default QuizCard;
