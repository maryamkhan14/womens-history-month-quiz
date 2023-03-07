import { useContext } from "react";
import { QuizContext } from "./context/QuizContext";
import { QuizCreationContextProvider } from "./context/QuizCreationContext";
import { QuizCompletionContextProvider } from "./context/QuizCompletionContext";
import QuizForm from "./components/QuizForm";
import "./App.css";
import QuizCardsDisplay from "./components/QuizCardsDisplay";

function App() {
  const { cardSet, quizActive } = useContext(QuizContext);
  return (
    <div className="App">
      {!quizActive && (
        <QuizCreationContextProvider>
          <QuizForm />
        </QuizCreationContextProvider>
      )}
      {quizActive && (
        <QuizCompletionContextProvider>
          <QuizCardsDisplay cards={cardSet.cards} />
        </QuizCompletionContextProvider>
      )}
    </div>
  );
}

export default App;
