import React from "react";
import { useEffect, useContext, useState } from "react";
import { QuizCompletionContext } from "../context/QuizCompletionContext";

const QuizCard = ({ card }) => {
  const { allAnswered, correctAnswerCount, dispatch } = useContext(
    QuizCompletionContext
  );

  // tells whether current question has been answered already
  const answered = Object.keys(allAnswered).includes(card.id);
  // captures result entered by user
  const [result, setResult] = useState(null);

  const handleSelect = (id) => {
    if (id == card.correctOption.id) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  useEffect(() => {
    result != null &&
      dispatch({
        type: "UPDATE_ALL_ANSWERED",
        payload: { id: card.id, result: result },
      });
    result == true &&
      dispatch({
        type: "SET_CORRECT_ANSWER_COUNT",
        payload: correctAnswerCount + 1,
      });
  }, [result]);

  return (
    <div className={`question-card ${answered && "answered"}`}>
      <h1>{card.header}</h1>
      <form className="card-options">
        {card.options.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              id={option.id}
              name={card.id}
              value={option.id}
              disabled={answered}
              onClick={() => handleSelect(option.id)}
            />
            <label htmlFor={option.id}>{option.text}</label>
          </div>
        ))}
      </form>
      {allAnswered[card.id] == true && (
        <p className="result-correct">
          Good job! Your answer, {card.correctOption.text}, was correct.
        </p>
      )}
      {allAnswered[card.id] == false && (
        <p className="result-incorrect">
          Sorry, your answer was incorrect. The correct answer is "
          {card.correctOption.text}".
        </p>
      )}
    </div>
  );
};

export default QuizCard;
