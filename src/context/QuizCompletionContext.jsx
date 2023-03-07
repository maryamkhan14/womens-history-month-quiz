import { createContext, useReducer } from "react";
export const QuizCompletionContext = createContext();
export const quizCompletionReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_QUIZ_ACTIVE":
      return { ...state, quizActive: action.payload };
    case "SET_ANSWERED_CORRECTLY":
      return { ...state, answeredCorrectly: action.payload };
    case "SET_QUIZ_SCORE":
      return { ...state, quizScore: action.payload };
    case "SET_CARD_SET":
      return { ...state, cardSet: action.payload };
    case "SET_QUIZ_CATEGORY":
      return { ...state, quizCategory: action.payload };
    case "SET_QUIZ_SIZE":
      return { ...state, quizSize: action.payload };
    case "RESET_QUIZ":
      return {
        cardSet: {},
        quizActive: false,
        quizScore: 0,
        quizCategory: "",
        quizSize: 5,
      };
    default:
      return state;
  }
};

export const QuizCompletionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizCompletionReducer, {
    cardSet: {},
    quizActive: false,
    answeredCorrectly: 0,
    quizScore: 0,
    quizCategory: "",
    quizSize: 5,
  });
  return (
    <QuizCompletionContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizCompletionContext.Provider>
  );
};
