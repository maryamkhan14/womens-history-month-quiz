import React from "react";

const QuizResult = ({ result, card, answerGiven }) => {
  return (
    <div className="quiz-result">
      <h1>{card.header}</h1>
      {!result && (
        <h3 className="result-incorrect">
          Sorry, your answer ("{answerGiven}") was incorrect. The correct answer
          is "{card.correctOption.text}".
        </h3>
      )}
      {result && (
        <h3 className="result-correct">
          Good job! Your answer, {answerGiven}, was correct.
        </h3>
      )}
    </div>
  );
};

export default QuizResult;
