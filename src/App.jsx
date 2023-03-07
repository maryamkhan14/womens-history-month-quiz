import { useContext } from "react";
import { QuizCompletionContext } from "./context/QuizCompletionContext";
import QuizForm from "./components/QuizForm";
import "./App.css";
import QuizCardsDisplay from "./components/QuizCardsDisplay";

function App() {
  const { cardSet, quizActive } = useContext(QuizCompletionContext);
  return (
    <div className="App">
      {!quizActive && <QuizForm />}
      {quizActive && <QuizCardsDisplay cards={cardSet.cards} />}
    </div>
  );
}

export default App;
