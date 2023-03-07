import React from "react";

const QuizSizeInput = () => {
  return (
    <div className="size-input">
      <p>How many questions would you like your quiz to contain?</p>
      <input
        type="number"
        id="size"
        name="size"
        min="1"
        max="30"
        defaultValue={5}
      ></input>
    </div>
  );
};

export default QuizSizeInput;
