import { createContext, useReducer } from "react";
export const QuizContext = createContext();
export const quizReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_QUIZ_ACTIVE":
      return { ...state, quizActive: action.payload };
    case "SET_QUIZ_SCORE":
      return { ...state, cardScore: action.payload };
    case "SET_CARD_SET":
      return { ...state, cardSet: action.payload };
    default:
      return state;
  }
};

export const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, {
    cardSet: {},
    quizActive: false,
    quizScore: 0,
  });
  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
