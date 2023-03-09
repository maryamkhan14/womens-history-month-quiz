import React from "react";
import { useEffect, useContext, useState } from "react";
import { QuizCompletionContext } from "../context/QuizCompletionContext";

const QuizCard = ({ card }) => {
  const { allAnswered, correctAnswerCount, dispatch } = useContext(
    QuizCompletionContext
  );
  const [answerGiven, setAnswerGiven] = useState(null);
  // captures result of user entry
  const [result, setResult] = useState(null);

  const answered = allAnswered.hasOwnProperty(card.id);

  const handleSelect = (option) => {
    if (option.id == card.correctOption.id) {
      setAnswerGiven(option.text);
      setResult(true);
    } else {
      setAnswerGiven(option.text);
      setResult(false);
    }
  };

  useEffect(() => {
    if (result != null) {
      dispatch({
        type: "UPDATE_ALL_ANSWERED",
        payload: { [card.id]: { result: result, answerGiven: answerGiven } },
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
    <div className={`quiz-card ${answered && "answered"}`}>
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
              onClick={() => handleSelect(option)}
            />
            <label htmlFor={option.id}>{option.text}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default QuizCard;
