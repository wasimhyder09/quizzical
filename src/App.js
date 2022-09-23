import {useState, useEffect} from 'react'
import Start from './components/Start'
import Loading from './components/Loading'
import Question from './components/Question'
import './App.css';

function App() {
  const[questions, setQuestions] = useState([])
  const [hasQuestions, setHasQuestions] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchQuestions = async() => {
    setLoading(true)
    const url = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&category=11'
    const res = await fetch(url)
    const result = await res.json()
    setQuestions(result.results)
    setHasQuestions(true)
    setLoading(false)
  }

  let id = 0
  const answers = []
  let optionVals = []
  let questionText = []
  let text = ''
  let options = []

  questions.map(question => {
    answers[id] = question.correct_answer
    questionText[id] = question.question
    text = question.incorrect_answers.toString();
    text = text+','+question.correct_answer
    optionVals = text.split(',')
    shuffle_array(optionVals)
    options[id] = optionVals
    id++
  })

  function shuffle_array(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function retakeQuiz() {
    setHasQuestions(false)
  }

  const params = [questionText, options, answers]

  const quizQuestions = <Question quizes = {params} retakeQuiz={retakeQuiz} />

  return (
    <div className="container">
      {(hasQuestions ? quizQuestions : loading ? <Loading /> : <Start fetchQuestions={fetchQuestions} />)}
    </div>
  );
}

export default App;
