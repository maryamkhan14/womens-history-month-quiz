import React from "react";
import { useState } from "react";
import QuizCard from "./QuizCard";
const QuizCardsDisplay = ({ cards }) => {
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <div className="quiz-form-container cards-display">
      <QuizCard key={cards[cardIndex].id} card={cards[cardIndex]} />
    </div>
  );
};

export default QuizCardsDisplay;
