import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const QuizCategorySelector = () => {
  const { dispatch } = useContext(QuizContext);
  const handleSelectChange = (e) => {
    dispatch({
      type: "SET_QUIZ_CATEGORY",
      payload: e.target.value,
    });
  };
  return (
    <div className="category-select">
      <p>Select a category.</p>
      <select
        name="category"
        id="category"
        onChange={(e) => handleSelectChange(e)}
      >
        <option value="firsts">
          Recognize the trailblazer. This category is about women who were the
          first to do something important, such as going to space.
        </option>
        <option value="icons">
          Identify the icon. This category involves women who shattered the
          glass ceiling - successful businesswomen, philanthropists, scientists,
          and more.
        </option>
        <option value="quotes">
          Know who said it. This category contains quotes by powerful women such
          as Maya Angelou and Oprah Winfrey.
        </option>
        <option value="misc">
          Miscellaneous - get questions from all of the above categories!
        </option>
      </select>
    </div>
  );
};

export default QuizCategorySelector;
