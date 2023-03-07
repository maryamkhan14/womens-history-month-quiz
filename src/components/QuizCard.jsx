import React from "react";

const QuizCard = ({ card }) => {
  return (
    <div>
      <div className="intro">
        <h1>{card.header}</h1>
      </div>
    </div>
  );
};

export default QuizCard;
