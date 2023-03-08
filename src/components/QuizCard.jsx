import React from "react";
import { useEffect, useContext, useState } from "react";
import { QuizCompletionContext } from "../context/QuizCompletionContext";

const QuizCard = ({ card }) => {
  const { allAnswered, correctAnswerCount, dispatch } = useContext(
    QuizCompletionContext
  );
  // captures result entered by user
  const [result, setResult] = useState(null);
  const answered = allAnswered.hasOwnProperty(card.id);
  const handleSelect = (id) => {
    if (id == card.correctOption.id) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  useEffect(() => {
    if (result != null) {
      dispatch({
        type: "UPDATE_ALL_ANSWERED",
        payload: { [card.id]: result },
      });
    }
    if (result == true) {
      dispatch({
        type: "SET_CORRECT_ANSWER_COUNT",
        payload: correctAnswerCount + 1,
      });
    }
  }, [result]);

  return (
    <div className={`question-card ${answered && "answered"}`}>
      <h1>{card.header}</h1>
      {!answered && (
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
      )}
    </div>
  );
};

export default QuizCard;
