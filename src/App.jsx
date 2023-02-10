import './App.css'
import { useContext, useEffect } from 'react'
import Welcome from './components/Welcome'
import Question from './components/Question'
import { QuizContext } from './context/quiz'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question/>}
    </div>
  )
}

export default App