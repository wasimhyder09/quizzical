import {useState, useEffect} from 'react'
import Start from './components/Start'
import Question from './components/Question'
import './App.css';

function App() {
  const[questions, setQuestions] = useState([])
  const [hasQuestions, setHasQuestions] = useState(false)

  const fetchQuestions = async() => {
    const url = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&category=11'
    const res = await fetch(url)
    const result = await res.json()
    setQuestions(result.results)
    setHasQuestions(true)
  }

  let id = 0
  const answers = []
  const quizQuestions = questions.map(question => {
    answers[id] = question.correct_answer
    id++
    return (
      <Question
        key = {id}
        quiz = {question}
      />
    )
  })


  return (
    <div className="container">
      {(hasQuestions ? quizQuestions : <Start fetchQuestions={fetchQuestions} />)}
    </div>
  );
}

export default App;
