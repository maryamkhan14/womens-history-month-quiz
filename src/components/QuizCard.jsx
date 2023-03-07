import React from "react";
import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";

const QuizCard = ({ card }) => {
  const { answeredCorrectly, dispatch } = useContext(QuizContext);
  const [answered, setAnswered] = useState(false);
  const handleSelect = (id) => {
    setAnswered(true);
    if (id == card.correctOption.id) {
      dispatch({
        type: "SET_ANSWERED_CORRECTLY",
        payload: answeredCorrectly + 1,
      });
    }
  };
  return (
    <div>
      <div className="intro">
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
      </div>
    </div>
  );
};

export default QuizCard;
