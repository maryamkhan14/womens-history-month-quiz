import React from "react";

const QuizResult = ({ result, card }) => {
  return (
    <div className="quiz-result">
      <h1>{card.header}</h1>
      {!result && (
        <div>
          <h3 className="result-incorrect">
            Sorry, your answer was incorrect. The correct answer is "
            {card.correctOption.text}".
          </h3>
        </div>
      )}
      {result && (
        <h3 className="result-correct">
          Good job! Your answer, {card.correctOption.text}, was correct.
        </h3>
      )}
    </div>
  );
};

export default QuizResult;
