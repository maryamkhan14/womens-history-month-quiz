import React from "react";
import { useState } from "react";
const QuizCard = ({ card }) => {
  const [answered, setAnswered] = useState(false);
  const handleSelect = (id) => {
    setAnswered(true);
    if (id == card.correctOption.id) {
    } else {
      console.log("wrong");
    }
  };
  return (
    <div>
      <div className="intro">
        <h1>{card.header}</h1>
        <form className="card-options">
          {card.options.map((option) => (
            <div>
              <input
                type="radio"
                key={option.id}
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
