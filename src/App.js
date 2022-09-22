import {useState, useEffect} from 'react'
import Start from './components/Start'
import Question from './components/Question'
import './App.css';

function App() {
  const[questions, setQuestions] = useState([])
  const [hasQuestions, setHasQuestions] = useState(false)

  const fetchQuestions = async() => {
    const url = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'
    const res = await fetch(url)
    const result = await res.json()
    setQuestions(result.results)
    setHasQuestions(true)
  }

  return (
    <div className="container">
      {(hasQuestions ? <Question /> : <Start fetchQuestions={fetchQuestions} hasQuestions={hasQuestions}  />)}
    </div>
  );
}

export default App;
