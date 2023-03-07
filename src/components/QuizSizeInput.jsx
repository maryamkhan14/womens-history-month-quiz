import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const QuizSizeInput = () => {
  const { dispatch } = useContext(QuizContext);
  const handleSizeChange = (e) => {
    dispatch({
      type: "SET_QUIZ_SIZE",
      payload: parseInt(e.target.value, 10),
    });
  };
  const handleKeyDown = (e) => {
    e.preventDefault();
    return false;
  };
  return (
    <div className="size-input">
      <p>How many questions would you like your quiz to contain?</p>
      <input
        type="number"
        id="size"
        name="size"
        min="5"
        max="30"
        defaultValue={5}
        onChange={(e) => handleSizeChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      ></input>
    </div>
  );
};

export default QuizSizeInput;
