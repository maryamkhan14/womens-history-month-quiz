import { useContext } from "react";
import { QuizContext } from "./context/QuizContext";
import QuizForm from "./components/QuizForm";
import "./App.css";
import QuizCardsDisplay from "./components/QuizCardsDisplay";

function App() {
  const { cardSet, quizActive } = useContext(QuizContext);
  return (
    <div className="App">
      {!quizActive && <QuizForm />}
      {quizActive && <QuizCardsDisplay cards={cardSet.cards} />}
    </div>
  );
}

export default App;
