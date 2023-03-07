import React from "react";
import { useEffect, useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
const QuizInfo = () => {
  const { quizScore, quizCategory } = useContext(QuizContext);
  const [displayCategory, setDisplayCategory] = useState("");

  const setCategory = () => {
    switch (quizCategory) {
      case "firsts":
        setDisplayCategory("Trailblazers");
        break;
      case "icons":
        setDisplayCategory("Icons");
        break;
      case "quotes":
        setDisplayCategory("Quotes");
        break;
      case "misc":
        setDisplayCategory("Miscellaneous");
        break;
    }
  };
  useEffect(() => {
    setCategory();
  }, [quizCategory]);

  return (
    <div className="quiz-info">
      <p>Category: {displayCategory}</p>
      <p>Score: {quizScore}%</p>
    </div>
  );
};

export default QuizInfo;
