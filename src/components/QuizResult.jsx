import React from "react";

const QuizResult = ({ result, card }) => {
  return (
    <div>
      <h1>{card.header}</h1>
      {!result && (
        <div>
          <p className="result-incorrect">
            Sorry, your answer was incorrect. The correct answer is "
            {card.correctOption.text}".
          </p>
        </div>
      )}
      {result && (
        <p className="result-correct">
          Good job! Your answer, {card.correctOption.text}, was correct.
        </p>
      )}
    </div>
  );
};

export default QuizResult;
